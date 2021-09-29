import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceProviderSkillDto } from '../dto/create-service-provider-skill.dto';
import { UpdateServiceProviderSkillDto } from '../dto/update-service-provider-skill.dto';
import { ServiceProviderSkillRepository } from '../repositories/service-provider-skill.repository';

@Injectable()
export class ServiceProviderSkillService {
  constructor(
    @InjectRepository(ServiceProviderSkillRepository)
    private readonly serviceProviderSkillRepository: ServiceProviderSkillRepository
  ) {}

  async create(values: CreateServiceProviderSkillDto) {
    return await this.serviceProviderSkillRepository.save(values);
  }

  async findOne(id: string) {
    return await this.serviceProviderSkillRepository.findOne({
      where: { id: id },
    });
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
