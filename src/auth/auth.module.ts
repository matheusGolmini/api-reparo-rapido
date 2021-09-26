import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PersonModule } from '../person/person.module';
import { TokenModule } from '../token/token.module';
import { AdpterBcrypt } from '../adapters/Encrypeter/bcrypt.adpter';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ProviderModule } from '../service-provider/provider.module';

@Module({
  imports: [
    TokenModule,
    PassportModule,
    PersonModule,
    forwardRef(() => ProviderModule),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthService, AdpterBcrypt, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
