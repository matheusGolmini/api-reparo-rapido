import { Module } from '@nestjs/common';
import { RatingService } from './service/rating.service';
import { RatingController } from './controller/rating.controller';

@Module({
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
