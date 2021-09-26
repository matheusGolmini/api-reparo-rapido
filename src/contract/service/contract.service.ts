import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientService } from '../../client/service/client.service';
import { Person } from '../../person/entities/person.entity';
import { CreateContractDto } from '../dto/create-contract.dto';
import { UpdateContractDto } from '../dto/update-contract.dto';
import { Contract } from '../entities/contract.entity';
import { ContractRepo } from '../repositories/contract.service.repository';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractRepo)
    private readonly repositoryContract: ContractRepo,
    private readonly clientService: ClientService,
  ) {}

  async create(createContract: CreateContractDto, idProvider: string) {
    const client = await this.validEmailClient(createContract.clientEmail);
    const contract = new Contract({
      ...createContract,
      amountApp: this.calculatorAmountApp(createContract.amountTotal),
      amountServiceProvider: this.calculatorAmountServiceProvider(
        createContract.amountTotal,
      ),
      approved: false,
      idPerson: client.id,
      link: '',
      idProvider,
    });
    return this.repositoryContract.save(contract);
  }

  findAll() {
    return this.repositoryContract.find();
  }

  findOne(id: string) {
    return this.repositoryContract.findOne({ where: { id } });
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    const { affected } = await this.repositoryContract.update(
      { id },
      updateContractDto,
    );

    return affected === 0 ? { success: false } : { success: true };
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }

  private async validEmailClient(email: string): Promise<Person> {
    const client = await this.clientService.getByEmail(email);
    if (!client) {
      throw new HttpException(
        'E-mail do cliente não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return client;
  }

  private calculatorAmountApp(amountTotal: string): string {
    //Ajustar a porcentagem pela estrela do prestador
    const amountApp = Number(amountTotal) * 0.1;
    return String(amountApp);
  }

  private calculatorAmountServiceProvider(amountTotal: string): string {
    //Ajustar a porcentagem pela estrela do prestador
    const amountApp = Number(amountTotal) - Number(amountTotal) * 0.1;
    return String(amountApp);
  }
}
