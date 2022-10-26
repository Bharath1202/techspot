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
  updateCart(data, i) {
    console.log('dta', data);

    if (i == 1) {
      if (data.quantity < data?.maxOrderQuantity) {

        data.quantity++
      } else {
        console.log(' data.quantity', data.quantity);
        alert("You Can't Add More product")

      }
    } else if (i == 2) {
      if (data.quantity > 1) {
        data.quantity--;
      } else {
        alert("You Can't Add More product")

      }
    }
    return this.httpClient.put(`${this.baseUrl}`, data)
  }
}
