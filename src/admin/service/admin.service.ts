import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonService } from '../../person/service/person.service';
import { AdpterBcrypt } from '../../adapters/Encrypeter/bcrypt.adpter';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { AdminRepository } from '../repositories/admin.repository';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminRepository)
    private readonly adminRepository: AdminRepository,
    private readonly personService: PersonService,
    private readonly adpterBcrypt: AdpterBcrypt,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const person = await this.personService.findOnePersonByEmail(
      createAdminDto.email,
    );

    if (person) {
      throw new HttpException(
        'Email is already being used',
        HttpStatus.CONFLICT,
      );
    }

    createAdminDto.password = this.adpterBcrypt.encrypt(
      createAdminDto.password,
    );

    const admin = this.adminRepository.create(createAdminDto);
    const saveAdmin = await this.adminRepository.save(admin);
    delete saveAdmin.password;

    return saveAdmin;
  }

  findAll() {
    return this.adminRepository.find({ where: { isAdmin: true } });
  }

  resetPassword(id: string): void {
    this.adminRepository.update(
      { id },
      { password: this.adpterBcrypt.encrypt('senha123456') },
    );
  }
}
