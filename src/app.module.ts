import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientApiModule } from './client-api/client-api.module';
import { ProviderApiModule } from './provider-api/provider-api.module';
import { AdminApiModule } from './admin-api/admin-api.module';
import { ClientModule } from './client/client.module';
import { ProviderModule } from './provider/provider.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ClientApiModule, ProviderApiModule, AdminApiModule, ClientModule, ProviderModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
