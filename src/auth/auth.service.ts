import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../token/service/token.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private tokenService: TokenService,
  ) {}

  async validatePerson(email: string, pass: string): Promise<any> {
    //simular find
    console.log('aquiaquiqa');
    const user = {
      id: '123',
      username: 'matheus@test.com',
      password: '123456',
    };
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, payload.username);
    return {
      access_token: token,
    };
  }
}
