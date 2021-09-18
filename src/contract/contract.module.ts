import { Module } from '@nestjs/common';
import { ContractService } from './service/contract.service';
import { ContractController } from './controller/contract.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractRepo } from './repositories/contract.service.repository';

@Module({
  controllers: [ContractController],
  providers: [ContractService],
  imports: [TypeOrmModule.forFeature([ContractRepo])],

})
export class ContractModule {}
