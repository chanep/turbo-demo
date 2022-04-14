import { Controller, Get } from '@nestjs/common';
import { SharedModuleService } from 'shared-module';

@Controller()
export class AppController {
  constructor(private readonly sharedModuleService: SharedModuleService) {}

  @Get()
  getHello(): string {
    return this.sharedModuleService.getText();
  }
}
