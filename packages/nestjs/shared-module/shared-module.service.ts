import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedModuleService {
  getText(): string {
    return 'Hello Shared!'; //comment
  }
}
