import { Module } from '@nestjs/common';
import { SkillsService } from './service/skill.service';
import { SkillsController } from './controller/skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [TypeOrmModule.forFeature([Skill])],
})
export class SkillsModule {}
