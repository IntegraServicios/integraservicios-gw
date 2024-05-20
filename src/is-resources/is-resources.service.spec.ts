import { Test, TestingModule } from '@nestjs/testing';
import { IsResourcesService } from './is-resources.service';

describe('IsResourcesService', () => {
  let service: IsResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsResourcesService],
    }).compile();

    service = module.get<IsResourcesService>(IsResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
