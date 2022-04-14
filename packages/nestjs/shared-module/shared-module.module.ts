import { Module } from '@nestjs/common';
import { SharedModuleService } from './shared-module.service';

@Module({
  imports: [],
  providers: [SharedModuleService],
  exports: [SharedModuleService],
})
export class SharedModule {}