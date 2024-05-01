import { Controller, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomMessageEvent, SseService } from './sse.service';

@Controller('sse')
export class SseController {
  constructor(private sseService: SseService) {}

  @Sse('stream')
  stream(): Observable<CustomMessageEvent> {
    return this.sseService.getSseStream();
  }
}
