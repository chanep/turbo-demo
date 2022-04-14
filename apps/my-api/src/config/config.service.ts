import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { BaseConfigService } from 'base-config';

dotenv.config();

@Injectable()
export class ConfigService extends BaseConfigService<ConfigService.ConfigVar> {
}

// istanbul ignore next
/* eslint-disable @typescript-eslint/no-namespace */
// tslint:disable:no-namespace
export namespace ConfigService {
  export enum ConfigVar {
    otherThing = 'OTHER_THING',
  }
}
