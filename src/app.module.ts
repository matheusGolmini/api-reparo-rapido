import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './service-provider/provider.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDatabase } from './database/config';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { PersonModule } from './person/person.module';
import { PersonBlockedModule } from './person-blocked/person-blocked.module';
import { AddressModule } from './address/address.module';
import { PersonAddressModule } from './person-address/person-address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configDatabase),
    ProviderModule,
    AdminModule,
    AuthModule,
    TokenModule,
    PersonModule,
    PersonBlockedModule,
    AddressModule,
    PersonAddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
