import { Module } from '@nestjs/common';
import { PersonBlockedService } from './service/person-blocked.service';
import { PersonBlockedController } from './controller/person-blocked.controller';

@Module({
  controllers: [PersonBlockedController],
  providers: [PersonBlockedService],
})
export class PersonBlockedModule {}
