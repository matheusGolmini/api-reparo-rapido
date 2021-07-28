import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../../auth/auth.service';
import { Token } from '../entity/token.entity';
import { TokenRepository } from '../repositories/token.repositories';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: TokenRepository,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({ email: username });
    console.log('objToken: ', objToken);
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
      //buscar user
      const user = {
        id: '123',
        username: 'matheus@test.com',
        password: '123456',
      };
      return this.authService.login(user);
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
