import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProviderSkillService } from './service-provider-skill.service';

describe('ServiceProviderSkillService', () => {
  let service: ServiceProviderSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceProviderSkillService],
    }).compile();

    service = module.get<ServiceProviderSkillService>(ServiceProviderSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
