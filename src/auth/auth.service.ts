import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Person } from '../person/entities/person.entity';
import { PersonService } from '../person/service/person.service';
import { TokenService } from '../token/service/token.service';
import { AdpterBcrypt } from '../utils/Encrypeter/bcrypt.adpter';

@Injectable()
export class AuthService {
  constructor(
    private personService: PersonService,
    private jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private tokenService: TokenService,
    private readonly adpterBcrypt: AdpterBcrypt,
  ) {}

  async validatePerson(email: string, pass: string): Promise<any> {
    const person = await this.personService.findOneLogin(email);

    if (person && this.adpterBcrypt.compare(pass, person.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = person;
      return result;
    }
    return null;
  }

  async login(user: Person) {
    const payload = { email: user.email, id: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, payload.email);
    return {
      access_token: token,
      name: user.firstName,
    };
  }
}
