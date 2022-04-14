import { Test, TestingModule } from '@nestjs/testing';
import { SharedModuleService } from './shared-module.service';
import winston from 'winston';


describe('AppController', () => {
  let sharedModuleService: SharedModuleService;
  
  console.log("winston", winston)
  console.log("format", winston.format)

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SharedModuleService],
    }).compile();

    sharedModuleService = app.get<SharedModuleService>(SharedModuleService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sharedModuleService.getText()).toBe('Hello Shared!');
    });
  });
});