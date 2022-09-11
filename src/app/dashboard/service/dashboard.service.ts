import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public behaviourSubject
  public behaviourSubject1
  public behaviourSubject2
  constructor() {
    this.behaviourSubject = new BehaviorSubject(65);
    this.behaviourSubject1 = new BehaviorSubject(50);
    this.behaviourSubject2 = new BehaviorSubject(80);
  }
  lastWeek() {
    return this.behaviourSubject1
  }
  lastMonth() {
    return this.behaviourSubject
  }
  lastYear() {
    return this.behaviourSubject2
  }
}

