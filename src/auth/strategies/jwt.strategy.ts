import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { PersonService } from '../../person/service/person.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private personService: PersonService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return await this.personService.findOnePersonById(payload.id);
  }
}
