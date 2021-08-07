import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceProviderRepository } from '../repositories/service-provider.repository';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectRepository(ServiceProviderRepository)
    private readonly ServiceProviderRepository: ServiceProviderRepository,
  ) {}
  create(createProviderDto: any) {
    return 'This action adds a new provider';
  }

  findAll() {
    return `This action returns all provider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: any) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
