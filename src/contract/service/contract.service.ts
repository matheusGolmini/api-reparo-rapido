import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContractDto } from '../dto/create-contract.dto';
import { UpdateContractDto } from '../dto/update-contract.dto';
import { ContractRepo } from '../repositories/contract.service.repository';


@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractRepo)
    private readonly repositoryContract: ContractRepo,
  ) {}

  create(createContract: CreateContractDto) {

    return this.repositoryContract.save(createContract);
  }

  findAll() {
    return this.repositoryContract.find();
  }

  findOne(id: string) {
    return this.repositoryContract.findOne({ where: { id } });
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
