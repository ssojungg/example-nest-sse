import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }

  handleMessage(message: string): void {
    // 메시지를 데이터베이스에 저장하거나 처리
    console.log('Handling message:', message);
  }
}
