import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';
import { SoftDeletePersonBlockedDto } from '../dto/soft-delete-person-blocked.dto';
import { PersonBlocked } from '../entities/person-blocked.entity';
import { PersonBlockedRepository } from '../repositories/person-blocked.repository';

@Injectable()
export class PersonBlockedService {
  constructor(
    @InjectRepository(PersonBlockedRepository)
    private readonly personBlockedRepository: PersonBlockedRepository,
  ) {}

  async createBlocked(
    values: CreatePersonBlockedDto,
    idPersonBlocker: string,
  ): Promise<PersonBlocked> {
    const personBlocked = await this.getBlocked(values.idPerson);
    if (!personBlocked) {
      const newPersonBlocked = this.personBlockedRepository.create({
        blockerDescription: values.description,
        idPerson: values.idPerson,
        idPersonBlocker,
      });
      return this.personBlockedRepository.save(newPersonBlocked);
    }
    throw new HttpException('User is already blocked', HttpStatus.CONFLICT);
  }

  get(): Promise<PersonBlocked[]> {
    return this.personBlockedRepository.find();
  }

  async getByPersonId(idPerson: string): Promise<PersonBlocked> {
    const personBlocked = await this.personBlockedRepository.findOne({
      where: { idPerson },
    });

    return personBlocked;
  }

  async softDeleteBlocked(
    values: SoftDeletePersonBlockedDto,
    idPersonUnlocker: string,
  ): Promise<void> {
    const personBlocked = await this.getBlocked(values.idPerson);
    if (!personBlocked) {
      throw new HttpException('User is not locked', HttpStatus.CONFLICT);
    }
    this.personBlockedRepository.update(
      { id: personBlocked.id },
      {
        deleted_at: new Date(),
        unlockDescription: values.description,
        idPersonUnlocker,
      },
    );
  }

  getBlocked(idPerson: string): Promise<PersonBlocked> {
    return this.personBlockedRepository.findOne({ where: { idPerson } });
  }
}
