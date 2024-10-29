import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(user: string ): string {
    return `Hello ${user || 'World'}!`;
  }
}
