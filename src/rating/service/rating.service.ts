import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from 'src/person/repositories/person.repository';
import { CreateRatingDto } from '../dto/create-rating.dto';
import { UpdateRatingDto } from '../dto/update-rating.dto';
import { RatingRepository } from '../repositories/rating.repository';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(RatingRepository)
    private readonly ratingRepository: RatingRepository,
    private readonly personRepository: PersonRepository,
  ) {}

  async create(createRatingDto: CreateRatingDto) {
    const ratedPerson = await this.personRepository.findOne({
      where: { id: createRatingDto.ratedPerson },
    });
    if (ratedPerson) {
      const savedRating = await this.ratingRepository.save(createRatingDto);
      const ratings = await this.ratingRepository.find({
        where: { ratedPerson: createRatingDto.ratedPerson },
      });
      let sum = 0;
      for (const rating of ratings) {
        sum += rating.rating;
      }
      const newRating = sum / ratings.length;
      this.personRepository.update(
        { id: createRatingDto.ratedPerson },
        { rating: newRating },
      );
      return savedRating;
    }
    throw new HttpException(`RatingPerson not found`, HttpStatus.NOT_FOUND);
  }

  async findOne(id: string) {
    return await this.ratingRepository.findOne({
      where: { id: id },
    });
  }

  async findAllByRatedPerson(idRatedPerson: string) {
    return await this.ratingRepository.find({
      where: { idRatedPerson: idRatedPerson },
    });
  }

  async findAllByRatingPerson(idRatingPerson: string) {
    return await this.ratingRepository.find({
      where: { idRatingPerson: idRatingPerson },
    });
  }

  async findAllByContract(idContract: string, ratingPerson: string) {
    return await this.ratingRepository.findOne({
      where: { contract: idContract, ratingPerson },
    });
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    const rating = await this.ratingRepository.findOne({
      where: { id: id },
    });
    if (rating) {
      const updatedRating = await this.ratingRepository.update(
        { id: id },
        updateRatingDto,
      );
      const ratings = await this.ratingRepository.find({
        where: { ratedPerson: rating.ratedPerson },
      });
      let sum = 0;
      for (const rating of ratings) {
        sum += rating.rating;
      }
      const newRating = sum / ratings.length;
      this.personRepository.update(
        { id: rating.ratedPerson },
        { rating: newRating },
      );
      return updatedRating;
    }
    throw new HttpException(`Rating not found`, HttpStatus.NOT_FOUND);
  }

  async remove(id: string) {
    const rating = await this.ratingRepository.findOne({
      where: { id: id },
    });
    if (rating) {
      const deletedRating = await this.ratingRepository.delete(rating);
      const ratings = await this.ratingRepository.find({
        where: { ratedPerson: rating.ratedPerson },
      });
      let sum = 0;
      for (const rating of ratings) {
        sum += rating.rating;
      }
      const newRating = ratings.length > 0 ? sum / ratings.length : 0;
      this.personRepository.update(
        { id: rating.ratedPerson },
        { rating: newRating },
      );
      return deletedRating;
    }
    throw new HttpException(`Rating not found`, HttpStatus.NOT_FOUND);
  }
}
