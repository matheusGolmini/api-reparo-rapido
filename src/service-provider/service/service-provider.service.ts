import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonBlockedService } from '../../person-blocked/service/person-blocked.service';
import { PersonService } from '../../person/service/person.service';
import { AdpterBcrypt } from '../../adapters/Encrypeter/bcrypt.adpter';
import { AdpterValidatorDocument } from '../../adapters/ValidatorDocument/cpf-cnpj-validator.adapter';
import { CreateServiceProviderDto } from '../dto/create-service-provider.dto';
import { AwaitingForApprovalResponseDto } from '../dto/find-awaiting-forApprova-Response.dto';
import { IRejectedServiceProviderDto } from '../dto/find-one-service-provider.dto';
import { ServiceProvider } from '../entities/service-provider.entity';
import { ServiceProviderRepository } from '../repositories/service-provider.repository';
import { ServiceProviderSkillService } from '../../service-provider-skill/service/service-provider-skill.service';
import { SkillsService } from '../../skill/service/skill.service';
import { UpdateServiceProviderDto } from '../dto/update-servicec-provider.dto';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectRepository(ServiceProviderRepository)
    private readonly serviceProviderRepository: ServiceProviderRepository,
    private readonly personService: PersonService,
    private readonly adpterBcrypt: AdpterBcrypt,
    private readonly documentValidator: AdpterValidatorDocument,
    private readonly personBlockedService: PersonBlockedService,
    private readonly skillService: SkillsService,
    private readonly serviceProviderSkillService: ServiceProviderSkillService,
  ) {}
  async create(values: CreateServiceProviderDto) {
    this.validtorDocument(values.cpf, values.cnpj);

    let person = await this.personService.findOnePersonByEmail(values.email);
    await this.alreadyExistsServiceProvider(person?.id);

    if (!person) {
      values.password = this.adpterBcrypt.encrypt(values.password);
      person = await this.personService.create(values);
    }

    const serviceProvider = await this.serviceProviderRepository.save({
      idServiceProvider: person.id,
      cnpj: values.cnpj,
      workPlaces: values.workPlaces,
      imageDocument: values.imageDocument,
      accountNumber: values.accountNumber,
    });
    this.createServiceProviderSkill(serviceProvider, values.skillSelected);
    return serviceProvider;
  }

  private async createServiceProviderSkill(
    serviceProvider: ServiceProvider,
    skillSelected: string,
  ): Promise<void> {
    const skill = await this.skillService.findOneByName(skillSelected);
    this.serviceProviderSkillService.create({
      additionalInfo: 'skill criada',
      idSkill: skill.id,
      idServiceProvider: serviceProvider.idServiceProvider,
      startDate: new Date(),
    });
  }

  async alreadyExistsServiceProvider(
    idServiceProvider?: string,
  ): Promise<void> {
    if (idServiceProvider) {
      const serviceProvider = await this.serviceProviderRepository.findOne({
        where: { idServiceProvider },
      });
      if (serviceProvider) {
        throw new HttpException(
          'already have an account with this email',
          HttpStatus.CONFLICT,
        );
      }
    }
  }

  validtorDocument(cpf: string, cnpj?: string): void {
    if (!this.documentValidator.isValidCpf(cpf)) {
      throw new HttpException('CPF invalid', HttpStatus.BAD_REQUEST);
    }
    if (!!cnpj && !this.documentValidator.isValidCnpj(cnpj)) {
      throw new HttpException('CNPJ invalid', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateProviderDto: UpdateServiceProviderDto) {
    this.serviceProviderRepository.update(id, updateProviderDto);
  }

  async findWaitingForApproval(): Promise<AwaitingForApprovalResponseDto[]> {
    const serviceProvider = await this.serviceProviderRepository.find({
      where: { approved: false },
    });
    return serviceProvider.map((value) => {
      return { ...value, status: value.idApprover ? 0 : null };
    }) as AwaitingForApprovalResponseDto[];
  }

  findApproved(): Promise<ServiceProvider[]> {
    return this.serviceProviderRepository.find({ where: { approved: true } });
  }

  async findOne(id: string) {
    const serviceProvider = (await this.serviceProviderRepository.findOne({
      where: { idServiceProvider: id },
    })) as any as IRejectedServiceProviderDto;
    serviceProvider.isBlocked = false;
    const personBlocked = await this.personBlockedService.getByPersonId(id);
    if (personBlocked) {
      serviceProvider.isBlocked = true;
      serviceProvider.blocked = personBlocked;
    }

    return {
      ...serviceProvider,
      status: serviceProvider.idApprover ? 0 : null,
    };
  }

  approved(idPerson: string, idApprover: string) {
    return this.serviceProviderRepository.update(
      { idServiceProvider: idPerson },
      {
        approved: true,
        joinDate: new Date(),
        idApprover,
        descriptionNotApproved: null,
      },
    );
  }

  rejected(idPerson: string, idApprover: string, description: string) {
    return this.serviceProviderRepository.update(
      { idServiceProvider: idPerson },
      {
        approved: false,
        joinDate: new Date(),
        idApprover,
        descriptionNotApproved: description,
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
