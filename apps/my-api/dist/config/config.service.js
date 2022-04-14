"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
const base_config_1 = require("base-config");
dotenv.config();
let ConfigService = class ConfigService extends base_config_1.BaseConfigService {
};
ConfigService = __decorate([
    (0, common_1.Injectable)()
], ConfigService);
exports.ConfigService = ConfigService;
(function (ConfigService) {
    let ConfigVar;
    (function (ConfigVar) {
        ConfigVar["otherThing"] = "OTHER_THING";
    })(ConfigVar = ConfigService.ConfigVar || (ConfigService.ConfigVar = {}));
})(ConfigService = exports.ConfigService || (exports.ConfigService = {}));
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map