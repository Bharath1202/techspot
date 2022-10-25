import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private baseUrl = environment.apiUrl + '/mobile';
  constructor(private httpCLient: HttpClient) { }

  getAllMobile() {
    return this.httpCLient.get(`${this.baseUrl}`)
  }
  getSingleMobile(id) {
    const params = new HttpParams().set('_id', id);
    return this.httpCLient.get(`${this.baseUrl}/getSingleMobile`, { params })
  }

}
