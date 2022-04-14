import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './base-config.service';
import { PROCESS_ENV } from './config.types';

interface TestModule {
  service: ConfigService;
  testModule: TestingModule;
}

describe('BaseConfigService', () => {
  const buildTestModule = async (): Promise<TestModule> => {
    const testModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: PROCESS_ENV,
          useValue: {
            APP_ENV: 'production',
          },
        },
      ],
    }).compile();

    const service = testModule.get<ConfigService>(ConfigService);

    expect(service).toBeDefined();

    return {
      service,
      testModule,
    };
  };

  describe('valueFor', () => {
    it('returns value of env var', async () => {
      const { service } = await buildTestModule();

      expect(service.valueFor(ConfigService.ConfigVar.appEnv, 'foobar')).toBe('production');
    });
  });
  
  describe('isDevelopment', () => {
    it('returns value of env var', async () => {
      const { service } = await buildTestModule();

      expect(service.isDevelopment()).toBeFalsy();
    });
  });
});
