import { Module } from '@nestjs/common';
import { RatingService } from './service/rating.service';
import { RatingController } from './controller/rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { PersonModule } from '../person/person.module';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [PersonModule, TypeOrmModule.forFeature([Rating])],
})
export class RatingModule {}
