import { SharedModuleService } from 'shared-module';
export declare class AppController {
    private readonly sharedModuleService;
    constructor(sharedModuleService: SharedModuleService);
    getHello(): string;
}
