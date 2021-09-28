import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../../auth/auth.service';
import { Person } from '../../person/entities/person.entity';
import { PersonService } from '../../person/service/person.service';
import { TokenRepository } from '../repositories/token.repositories';

@Injectable()
export class TokenService {
  constructor(
    private personService: PersonService,
    @InjectRepository(TokenRepository)
    private readonly tokenRepository: TokenRepository,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string, idPerson: string) {
    const objToken = await this.tokenRepository.findOne({ idPerson });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash,
      });
      return;
    }

    this.tokenRepository.insert({
      hash,
      email: username,
      idPerson,
    });
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({ hash: oldToken });
    if (objToken) {
      const person = await this.personService.findOnePersonByEmail(
        objToken.email,
      );
      return this.authService.login(person);
    }
    return new HttpException(
      {
        errorMessage: 'invalid token',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }

  async getPersonByToken(token: string): Promise<Person | null> {
    const objToken = await this.tokenRepository.findOne({ hash: token });
    if (objToken) {
      const person = await this.personService.findOnePersonById(
        objToken.idPerson,
      );
      return person;
    }
    return null;
  }
}
