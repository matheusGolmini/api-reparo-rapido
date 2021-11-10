import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';
import { ClientService } from '../../client/service/client.service';
import { ContractStatus } from '../../enum/status';
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
      status: ContractStatus.ESPERANDO_APROVACAO,
    });
    return this.repositoryContract.save(contract);
  }

  findAll() {
    return this.repositoryContract.find();
  }

  // findAllContractClientByStatusAndPersonId(idPerson: string, status: string) {
  //   return this.repositoryContract.find({
  //     where: {
  //       idPerson,
  //       status,
  //       approved: true,
  //     },
  //   });
  // }

  findAllContractClientByStatusAndPersonIdQuery(
    idPerson: string,
    status: string,
  ) {
    return this.repositoryContract.query(
      `
      select 
        s."name" as "skillName", 
        s.id as "skillId", 
        s.image_url as "skillImage",
        p.id as "serviceProviderId",
        p.first_name as "firstName",
        p.phone,
        p.image_profile as "imageProfile",
        c.*
          from contract c 
        join person p on p.id = c.id_service_provider 
        join service_provider_skill sps on sps.id_service_provider = p.id 
        join skill s on s.id = sps.id_skill 
          where c.id_person = $1
        and c.status = $2
        and c.approved = true
        order by created_at desc;
      `,
      [idPerson, status],
    );
  }

  findAllContractProviderByStatusAndPoviderId(
    idProvider: string,
    status: string,
  ) {
    return this.repositoryContract.find({
      where: {
        idProvider,
        status,
        approved: true,
      },
    });
  }

  async findAllContractStatus(idProvider: string) {
    const contracts = await this.repositoryContract.find({
      where: {
        idProvider,
        status: In([
          ContractStatus.ESPERANDO_ASSINATURA,
          ContractStatus.EM_ANDAMENTO,
          ContractStatus.FINALIZADO,
        ]),
        approved: true,
      },
    });
    return this.calculatorContractStatus(contracts);
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

  private calculatorContractStatus(contracts: Contract[]) {
    const response = { finalizado: 0, aguardandoAssintura: 0, emAndamento: 0 };
    if (contracts.length === 0) return response;

    contracts.forEach((value) => {
      if (value.status === ContractStatus.ESPERANDO_ASSINATURA) {
        response.aguardandoAssintura += 1;
      }
      if (value.status === ContractStatus.EM_ANDAMENTO) {
        response.emAndamento += 1;
      }
      if (value.status === ContractStatus.FINALIZADO) {
        response.finalizado += 1;
      }
    });
    return response;
  }
}
