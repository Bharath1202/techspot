import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  public basicAuth;
  public token;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.basicAuth = 'Basic' + btoa('techSpot:DAF87DSFDSFDSA98FSADKJE324KJL32HFD7FDSFB24343J49DSF');
    // this.token = localStorage.getItem
    return next.handle(request);
  }
}
