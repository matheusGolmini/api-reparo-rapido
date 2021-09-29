import { EntityRepository, Repository } from 'typeorm';
import { ServiceProviderSkill } from '../entities/service-provider-skill.entity';

@EntityRepository(ServiceProviderSkill)
export class ServiceProviderSkillRepository extends Repository<ServiceProviderSkill> {}
