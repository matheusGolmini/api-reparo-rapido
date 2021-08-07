import { EntityRepository, Repository } from 'typeorm';
import { ServiceProvider } from '../entities/service-provider.entity';

@EntityRepository(ServiceProvider)
export class ServiceProviderRepository extends Repository<ServiceProvider> {}
