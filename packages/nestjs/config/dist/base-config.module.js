"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseConfigModule = void 0;
const common_1 = require("@nestjs/common");
const base_config_service_1 = require("./base-config.service");
const config_types_1 = require("./config.types");
let BaseConfigModule = class BaseConfigModule {
};
BaseConfigModule = __decorate([
    (0, common_1.Module)({
        providers: [
            base_config_service_1.BaseConfigService,
            {
                provide: config_types_1.PROCESS_ENV,
                useValue: process.env,
            },
        ],
        exports: [base_config_service_1.BaseConfigService, base_config_service_1.ConfigService],
    })
], BaseConfigModule);
exports.BaseConfigModule = BaseConfigModule;
//# sourceMappingURL=base-config.module.js.map