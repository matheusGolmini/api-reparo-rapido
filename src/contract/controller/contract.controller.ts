import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ContractService } from '../service/contract.service';
import { CreateContractDto } from '../dto/create-contract.dto';
import { UpdateContractDto } from '../dto/update-contract.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ContractStatus } from '../../enum/status';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Contract')
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  create(
    @Body() createContractDto: CreateContractDto,
    @Request() { user }: any,
  ) {
    return this.contractService.create(createContractDto, user.id);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @Get('provider/waiting-signatures')
  findaAllWaitingForSignaturesProvider(@Request() { user }: any) {
    return this.contractService.findAllContractProviderByStatusAndPoviderId(
      user.id,
      ContractStatus.ESPERANDO_ASSINATURA,
    );
  }

  @Get('provider/status')
  findaAllContractStatus(@Request() { user }: any) {
    return this.contractService.findAllContractStatus(user.id);
  }

  @Get('provider/in-progress')
  findAllInProgressProvider(@Request() { user }: any) {
    return this.contractService.findAllContractProviderByStatusAndPoviderId(
      user.id,
      ContractStatus.EM_ANDAMENTO,
    );
  }

  @Get('provider/finished')
  findAllFinishedProvider(@Request() { user }: any) {
    return this.contractService.findAllContractProviderByStatusAndPoviderId(
      user.id,
      ContractStatus.FINALIZADO,
    );
  }

  @Get('client/waiting-payment')
  findaAllWaitingForPaymentClient(@Request() { user }: any) {
    return this.contractService.findAllContractClientByStatusAndPersonIdQuery(
      user.id,
      ContractStatus.ESPERANDO_PAGAMENTO,
    );
  }

  @Get('client/in-progress')
  findAllInProgressClient(@Request() { user }: any) {
    return this.contractService.findAllContractClientByStatusAndPersonIdQuery(
      user.id,
      ContractStatus.EM_ANDAMENTO,
    );
  }

  @Get('client/finished')
  findAllFinishedClient(@Request() { user }: any) {
    return this.contractService.findAllContractClientByStatusAndPersonIdQuery(
      user.id,
      ContractStatus.FINALIZADO,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return this.contractService.update(id, updateContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractService.remove(+id);
  }
}
