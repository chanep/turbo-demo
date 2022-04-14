/// <reference types="node" />
export declare class BaseConfigService<T extends string> {
    protected readonly env: NodeJS.ProcessEnv;
    constructor(env: NodeJS.ProcessEnv);
    isDevelopment(): boolean;
    valueFor(configVar: T | ConfigService.ConfigVar, defaultValue?: string): string;
}
export declare class ConfigService extends BaseConfigService<ConfigService.ConfigVar> {
}
export declare namespace ConfigService {
    enum ConfigVar {
        appEnv = "APP_ENV",
        logging = "LOGGING",
        loggingLevel = "LOGGING_LEVEL",
        loggingVerbosity = "LOGGING_VERBOSITY"
    }
}
