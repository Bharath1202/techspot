import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  subject: Subject<number>;
  public observable!: Observable<any>;
  public counter = 0;
  constructor(private httpCLient: HttpClient) {
    this.subject = new Subject<number>();
  }

  sendData(data: number) {
    this.subject.next((this.counter += 1));
  }
  data(data: number) {
    this.subject.next(this.counter -= 1)
  }
}
