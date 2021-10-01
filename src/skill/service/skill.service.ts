import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { SkillRepository } from '../repositories/skill.repository';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillRepository)
    private readonly skillRepository: SkillRepository,
  ) {}

  create(createSkillDto: CreateSkillDto) {
    return this.skillRepository.save(createSkillDto);
  }

  findAll() {
    return this.skillRepository.find();
  }

  findOne(id: string) {
    return this.skillRepository.findOne({ where: { id } });
  }

  findOneByName(skillName: string) {
    return this.skillRepository.findOne({ where: { name: skillName } });
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) {
    const { affected } = await this.skillRepository.update(
      { id },
      updateSkillDto,
    );

    return affected === 0 ? { success: false } : { success: true };
  }

  async remove(id: string) {
    const { affected } = await this.skillRepository.softDelete(id);
    return affected === 0 ? { success: false } : { success: true };
  }
}
