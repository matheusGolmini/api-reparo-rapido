import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './serviceProvider/provider.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDatabase } from './database/config';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configDatabase),
    ProviderModule,
    AdminModule,
    AuthModule,
    TokenModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
