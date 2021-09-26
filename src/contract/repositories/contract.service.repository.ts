import { EntityRepository, Repository } from 'typeorm';
import { Contract } from '../entities/contract.entity';

@EntityRepository(Contract)
export class ContractRepo extends Repository<Contract> {}
