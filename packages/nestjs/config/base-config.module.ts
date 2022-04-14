import { Module } from '@nestjs/common';
import { BaseConfigService, ConfigService } from './base-config.service';
import { PROCESS_ENV } from './config.types';

@Module({
  providers: [
    BaseConfigService,
    {
      provide: PROCESS_ENV,
      useValue: process.env,
    },
  ],
  exports: [BaseConfigService, ConfigService],
})
export class BaseConfigModule {}
