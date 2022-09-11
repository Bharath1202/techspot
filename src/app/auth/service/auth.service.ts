import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + '/login'
  constructor(private httpClient:HttpClient) { }

  postlogin(data){
    return this.httpClient.post<any>(`${this.baseUrl}`,data).pipe(map(user=>{
      console.log(user);
      
    }))
  }
}
