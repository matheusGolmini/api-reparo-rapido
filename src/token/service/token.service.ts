import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../../auth/auth.service';
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

  async save(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({ email: username });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash,
      });
      return;
    }
    console.log('username: ', username);
    this.tokenRepository.insert({
      hash,
      email: username,
    });
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({ hash: oldToken });
    if (objToken) {
      const person = await this.personService.findOnePersonByEmail(
        objToken.email,
      );
      return this.authService.login(person);
    } else {
      return new HttpException(
        {
          errorMessage: 'invalid token',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
