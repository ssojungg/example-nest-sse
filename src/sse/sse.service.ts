import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MsgData } from './msg-data';

// CustomMessageEvent 인터페이스 정의
export interface CustomMessageEvent {
  data: MsgData;
}

@Injectable()
export class SseService {
  private sseMsg = new BehaviorSubject<MsgData>(new MsgData('init', 'initial msg'));
  public sseMsg$: Observable<MsgData> = this.sseMsg.asObservable();

  fire(msg: string) {
    // 모든 연결된 클라이언트에게 메시지를 전송
    this.sseMsg.next(new MsgData('arlarm!', msg));
  }

  // 이 메서드는 연결된 클라이언트에게 데이터 스트림을 제공
  getSseStream(): Observable<CustomMessageEvent> {
    return this.sseMsg$.pipe(
      map(data => ({ data }))
    );
  }
}
