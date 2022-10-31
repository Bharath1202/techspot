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
  public behaviourSubject: BehaviorSubject<number>;
  constructor(private httpCLient: HttpClient) {
    this.subject = new Subject<number>();
    this.behaviourSubject = new BehaviorSubject(0)
  }

  nav(length) {
    this.behaviourSubject.next(length);
  }
}
