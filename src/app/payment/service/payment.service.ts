import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = environment.apiUrl + '/payment';
  constructor(private httpClient: HttpClient) { }

  savePayment(data) {
    return this.httpClient.post(`${this.baseUrl}`, data)
  }
  getSingleAddress(id) {
    const params = new HttpParams().set('_id', id);
    return this.httpClient.get(`${this.baseUrl}/getSinglePayemntAddress`, { params })
  }
}
