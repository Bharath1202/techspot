import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + '/login';
  private register = environment.apiUrl + '/register';
  constructor(private httpClient: HttpClient) { }

  postlogin(data) {
    return this.httpClient.post<any>(`${this.baseUrl}`, data).pipe(map(user => {
      console.log(user);
      if (user?.result) {
        let userDetail = user?.result?.userDetails
        let loginType = user?.result?.loginType
        localStorage.setItem('userDetail', JSON.stringify(userDetail))
        localStorage.setItem('loginType', loginType)
      }
    }))
  }
  saveUser(data) {
    return this.httpClient.post(`${this.register}`, data)
  }
}
