import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Person } from '../person/entities/person.entity';
import { PersonService } from '../person/service/person.service';
import { ServiceProviderService } from '../service-provider/service/service-provider.service';
import { TokenService } from '../token/service/token.service';
import { AdpterBcrypt } from '../adapters/Encrypeter/bcrypt.adpter';

@Injectable()
export class AuthService {
  constructor(
    private personService: PersonService,
    private providerService: ServiceProviderService,
    private jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private tokenService: TokenService,
    private readonly adpterBcrypt: AdpterBcrypt,
  ) {}

  async validatePerson(email: string, pass: string): Promise<any> {
    const person = await this.personService.findOneLogin(email);

    if (
      person?.personBlocked &&
      person.personBlocked.length === 0 &&
      person &&
      this.adpterBcrypt.compare(pass, person.password)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = person;
      return result;
    }
    return null;
  }

  async login(user: Person) {
    const payload = { email: user.email, id: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, payload.email, user.id);
    return {
      access_token: token,
      person: user,
    };
  }

  async loginToken(token: string) {
    const person: Person | null = await this.tokenService.getPersonByToken(
      token,
    );
    if (person) {
      return this.login(person);
    }
    return new HttpException(
      {
        errorMessage: 'invalid token',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }

  async loginProvider(user: Person) {
    await this.validateProvider(user.id);
    const payload = { email: user.email, id: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, payload.email, user.id);
    return {
      access_token: token,
      person: user,
    };
  }

  private async validateProvider(personId: string): Promise<void> {
    const provider = await this.providerService.findOne(personId);
    if (!provider || !provider.approved) {
      throw new HttpException(
        {
          errorMessage: 'Aguarde ser aprovado para poder acessar o app',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
