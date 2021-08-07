import { Test, TestingModule } from '@nestjs/testing';
import { PersonBlockedService } from './person-blocked.service';

describe('PersonBlockedService', () => {
  let service: PersonBlockedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonBlockedService],
    }).compile();

    service = module.get<PersonBlockedService>(PersonBlockedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
