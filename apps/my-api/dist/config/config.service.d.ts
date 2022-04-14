import { BaseConfigService } from 'base-config';
export declare class ConfigService extends BaseConfigService<ConfigService.ConfigVar> {
}
export declare namespace ConfigService {
    enum ConfigVar {
        otherThing = "OTHER_THING"
    }
}
