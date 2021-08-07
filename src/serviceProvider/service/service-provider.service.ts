import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonService } from '../../person/service/person.service';
import { AdpterBcrypt } from '../../utils/Encrypeter/bcrypt.adpter';
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
  ) {}
  async create(values: CreateServiceProviderDto) {
    let person = await this.personService.findOnePersonByEmail(values.email);

    if (!person) {
      values.password = this.adpterBcrypt.encrypt(values.password);
      person = await this.personService.create(values);
    }

    return await this.serviceProviderRepository.save({
      idServiceProvider: person.id,
    });
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

  update(id: number, updateProviderDto: any) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
