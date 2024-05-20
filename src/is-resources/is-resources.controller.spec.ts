import { Test, TestingModule } from '@nestjs/testing';
import { IsResourcesController } from './is-resources.controller';

describe('IsResourcesController', () => {
  let controller: IsResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsResourcesController],
    }).compile();

    controller = module.get<IsResourcesController>(IsResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
