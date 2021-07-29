import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TokenService } from './service/token.service';
import { TokenController } from './controller/token.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { PersonModule } from '../person/person.module';

@Module({
  controllers: [TokenController],
  imports: [
    PersonModule,
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Token]),
  ],
  providers: [TokenService],
  exports: [TokenService, TypeOrmModule],
})
export class TokenModule {}
