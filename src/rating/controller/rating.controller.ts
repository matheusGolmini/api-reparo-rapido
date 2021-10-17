import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RatingService } from '../service/rating.service';
import { CreateRatingDto } from '../dto/create-rating.dto';
import { UpdateRatingDto } from '../dto/update-rating.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Rating')
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingService.findOne(id);
  }

  @Get('/ratedPerson/:id')
  findByRatedPerson(@Param('id') id: string) {
    return this.ratingService.findAllByRatedPerson(id);
  }

  @Get('/contract/:id')
  findByContract(@Param('id') id: string, @Request() { user }: any) {
    return this.ratingService.findAllByContract(id, user.id);
  }

  @Get('/ratingPerson/:id')
  findByRatingPerson(@Param('id') id: string) {
    return this.ratingService.findAllByRatingPerson(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingService.update(id, updateRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingService.remove(id);
  }
}
