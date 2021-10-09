import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonAddressService } from '../../person-address/service/person-address.service';
import { CreateServiceProviderSkillDto } from '../dto/create-service-provider-skill.dto';
import { UpdateServiceProviderSkillDto } from '../dto/update-service-provider-skill.dto';
import { ServiceProviderSkillRepository } from '../repositories/service-provider-skill.repository';

@Injectable()
export class ServiceProviderSkillService {
  constructor(
    @InjectRepository(ServiceProviderSkillRepository)
    private readonly serviceProviderSkillRepository: ServiceProviderSkillRepository,
    private readonly personAddressService: PersonAddressService,
  ) {}

  async create(values: CreateServiceProviderSkillDto) {
    return await this.serviceProviderSkillRepository.save(values);
  }

  async findOne(id: string) {
    return await this.serviceProviderSkillRepository.findOne({
      where: { id: id },
    });
  }

  async findOneByServiceProvider(id: string) {
    return await this.serviceProviderSkillRepository.findOne({
      where: { idServiceProvider: id },
    });
  }

  async find() {
    return await this.serviceProviderSkillRepository.find();
  }

  async getServicesProvidersBySkillIdAndAddress(
    skillId: string,
    clientId: string,
  ) {
    //Talvez tenha que filtrar por endereço default
    const addressPromise = this.personAddressService.getByIdPerson(clientId);
    const serviceSkillsPromise = this.serviceProviderSkillRepository.find({
      where: {
        idSkill: skillId,
      },
    });

    const [address, serviceSkills] = await Promise.all([
      addressPromise,
      serviceSkillsPromise,
    ]);

    return serviceSkills.filter((value) =>
      value.serviceProvider.workPlaces.includes(address[0].Address.city),
    );
  }

  async findByServiceProviderId(id: string) {
    return await this.serviceProviderSkillRepository.findOne({
      where: { id_service_provider_skill: id },
    });
  }

  async update(id: string, values: UpdateServiceProviderSkillDto) {
    const { affected } = await this.serviceProviderSkillRepository.update(
      { id },
      values,
    );

    return affected === 0 ? { success: false } : { success: true };
  }

  remove(id: string) {
    return `This action removes a #${id} serviceProviderSkill`;
  }
}
