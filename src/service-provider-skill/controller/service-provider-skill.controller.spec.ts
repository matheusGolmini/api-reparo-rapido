import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProviderSkillController } from './service-provider-skill.controller';
import { ServiceProviderSkillService } from '../service/service-provider-skill.service';

describe('ServiceProviderSkillController', () => {
  let controller: ServiceProviderSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProviderSkillController],
      providers: [ServiceProviderSkillService],
    }).compile();

    controller = module.get<ServiceProviderSkillController>(ServiceProviderSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
