import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from 'src/person/repositories/person.repository';
import { PersonService } from 'src/person/service/person.service';
import { CreateRatingDto } from '../dto/create-rating.dto';
import { UpdateRatingDto } from '../dto/update-rating.dto';
import { RatingRepository } from '../repositories/rating.repository';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(RatingRepository)
      private readonly ratingRepository: RatingRepository,
      private readonly personRepository: PersonRepository
  ) {}
  
  async create(createRatingDto: CreateRatingDto) {
    const ratedPerson = await this.personRepository.findOne({
      where: { id: createRatingDto.idRatedPerson }
    });
    if (ratedPerson) {
      const savedRating = await this.ratingRepository.save(createRatingDto);
      const ratings = await this.ratingRepository.find({
        where: { ratedPerson: createRatingDto.idRatedPerson }
      });
      let sum = 0;
      for (const rating of ratings) {
        sum += rating.rating;
      }
      const newRating = sum / (ratings.length + 1);
      this.personRepository.update(
        { id: createRatingDto.idRatedPerson },
        { rating: newRating }
      );
      return savedRating;
    }
    return `RatedPerson not found`;
  }

  async findOne(id: string) {
    return await this.ratingRepository.findOne({
      where: { id: id }
    });
  }

  async findAllByRatedPerson(idRatedPerson: string) {
    return await this.ratingRepository.find({
      where: { idRatedPerson: idRatedPerson }
    });
  }

  async findAllByRatingPerson(idRatingPerson: string) {
    return await this.ratingRepository.find({
      where: { idRatingPerson: idRatingPerson }
    });
  }

  async findAllByService(idService: string) {
    return await this.ratingRepository.find({
      where: { idService: idService }
    });
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    const rating = await this.ratingRepository.findOne({
      where: { id: id }
    });
    if (rating) {
      let ratedPerson = await this.personRepository.findOne({
        where: { id: rating.ratedPerson }
      });
      if (ratedPerson) {
        const updatedRating = await this.ratingRepository.update(
          { id: id },
          updateRatingDto
        );
        const ratings = await this.ratingRepository.find({
          where: { ratedPerson: rating.ratedPerson }
        });
        let sum = 0;
        for (const rating of ratings) {
          sum += rating.rating;
        }
        const newRating = sum / (ratings.length + 1);
        this.personRepository.update(
          { id: rating.ratedPerson },
          { rating: newRating }
        );
        return updatedRating;
      }
      return `RatingPerson not found`;
    }
    return `Rating not found`;
  }

  async remove(id: string) {
    const rating = await this.ratingRepository.findOne({
      where: { id: id }
    });
    if (rating) {
      let ratedPerson = await this.personRepository.findOne({
        where: { id: rating.ratedPerson }
      });
      if (ratedPerson) {
        const deletedRating = await this.ratingRepository.delete(rating);
        const ratings = await this.ratingRepository.find({
          where: { ratedPerson: rating.ratedPerson }
        });
        let sum = 0;
        for (const rating of ratings) {
          sum += rating.rating;
        }
        const newRating = sum / (ratings.length + 1);
        this.personRepository.update(
          { id: rating.ratedPerson },
          { rating: newRating }
        );
        return deletedRating;
      }
      return `RatingPerson not found`;
    }
    return `Rating not found`;
  }
}
