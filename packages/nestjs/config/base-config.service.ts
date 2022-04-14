import { Inject, Injectable } from '@nestjs/common';
import { PROCESS_ENV } from './config.types';

@Injectable()
export class BaseConfigService<T extends string> {
  constructor(@Inject(PROCESS_ENV) protected readonly env: NodeJS.ProcessEnv) {}

  public isDevelopment(): boolean {
    return this.valueFor(ConfigService.ConfigVar.appEnv, '') === 'development';
  }

  public valueFor(configVar: T | ConfigService.ConfigVar, defaultValue?: string): string {
    const value = this.env[configVar];

    if (value) {
      return value;
    }

    return defaultValue || '';
  }
}

@Injectable()
export class ConfigService extends BaseConfigService<ConfigService.ConfigVar> {
}

// istanbul ignore next
/* eslint-disable @typescript-eslint/no-namespace */
// tslint:disable:no-namespace
export namespace ConfigService {
  export enum ConfigVar {
    appEnv = 'APP_ENV',
    logging = 'LOGGING',
    loggingLevel = 'LOGGING_LEVEL',
    loggingVerbosity = 'LOGGING_VERBOSITY',
  }
}
