import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = environment.apiUrl + '/cart';
  constructor(private httpClient: HttpClient) { }
  addtoCart(data) {
    return this.httpClient.post(`${this.baseUrl}`, data)
  }
  getAllCart() {
    return this.httpClient.get(`${this.baseUrl}`)
  }
  updateCart(data) {
    return this.httpClient.put(`${this.baseUrl}`, data)
  }
}
