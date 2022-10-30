import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public behaviourSubject
  public behaviourSubject1
  public behaviourSubject2
  constructor(private http: HttpClient) {
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

  postUrl(data) {
    console.log(data);
    const header = new HttpHeaders({
      'Authorization': 'Apisecret 2y4uMH03YBhPJY7yvZvsFKfJREdfzgfcMzcWqQkBFgiaMh6KMUqXjVc2uhFtJMkx',
      'Content-Type': 'application/json',
    })
    const params = new HttpParams().set('data', data)
    // console.log(params);

    return this.http.post(`https://dev.vdocipher.com/api/videos?title=`, { header: header }, { params })
  }

}