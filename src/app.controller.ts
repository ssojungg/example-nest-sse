import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SseService } from './sse/sse.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sseService: SseService
  ) {}

  @Get()
  root(): string {
    this.sseService.fire('app root called');
    return this.appService.root();
  }

  @Post('message')
  createMessage(@Body() body: any): string {
    // SseService를 사용하여 모든 연결된 클라이언트에게 메시지를 전송
    this.sseService.fire(body.message);
    return 'Message received and broadcasted';
  }
}
