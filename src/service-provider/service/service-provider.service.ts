import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonService } from '../../person/service/person.service';
import { AdpterBcrypt } from '../../utils/Encrypeter/bcrypt.adpter';
import { AdpterValidatorDocument } from '../../utils/ValidatorDocument/cpf-cnpj-validator.adapter';
import { CreateServiceProviderDto } from '../dto/create-service-provider.dto';
import { ServiceProvider } from '../entities/service-provider.entity';
import { ServiceProviderRepository } from '../repositories/service-provider.repository';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectRepository(ServiceProviderRepository)
    private readonly serviceProviderRepository: ServiceProviderRepository,
    private readonly personService: PersonService,
    private readonly adpterBcrypt: AdpterBcrypt,
    private readonly documentValidator: AdpterValidatorDocument,
  ) {}
  async create(values: CreateServiceProviderDto) {
    this.validtorDocument(values.cpf, values.cnpj);
    let person = await this.personService.findOnePersonByEmail(values.email);

    if (!person) {
      values.password = this.adpterBcrypt.encrypt(values.password);
      person = await this.personService.create(values);
    }

    return await this.serviceProviderRepository.save({
      idServiceProvider: person.id,
    });
  }

  validtorDocument(cpf: string, cnpj: string): void {
    if (!this.documentValidator.isValidCpf(cpf)) {
      throw new HttpException('CPF invalid', HttpStatus.BAD_REQUEST);
    }
    if (!this.documentValidator.isValidCnpj(cnpj)) {
      throw new HttpException('CNPJ invalid', HttpStatus.BAD_REQUEST);
    }
  }

  findWaitingForApproval(): Promise<ServiceProvider[]> {
    return this.serviceProviderRepository.find({ where: { idApprover: null } });
  }

  findApproved(): Promise<ServiceProvider[]> {
    return this.serviceProviderRepository.find({ where: { approved: true } });
  }

  findOne(id: string) {
    return this.serviceProviderRepository.findOne({
      where: { idServiceProvider: id },
    });
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
