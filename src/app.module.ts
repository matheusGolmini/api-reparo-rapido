import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ClientModule, ProviderModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
