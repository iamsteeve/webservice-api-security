import { Test, TestingModule } from '@nestjs/testing';
import { HashController } from './hash.controller';

describe('Hash Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HashController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HashController = module.get<HashController>(HashController);
    expect(controller).toBeDefined();
  });
});
