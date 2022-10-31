import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = environment.apiUrl + '/cart';
  constructor(private httpClient: HttpClient, private toastr: NgToastService) { }
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
        data?.product?.mobilePrice * data?.quantity
      } else {
        this.toastr.warning({ detail: "Error Message", summary: "You Can't Add More product", duration: 2000 })
        console.log(' data.quantity', data.quantity);
      }
    } else if (i == 2) {
      if (data.quantity > 1) {
        data.quantity--;
      } else {
        console.log(' data.quantity', data.quantity);
      }
    }
    return this.httpClient.put(`${this.baseUrl}`, data)
  }

  getSingleCart(id) {
    console.log('id', id);
    const params = new HttpParams().set('_id', id)
    return this.httpClient.get(`${this.baseUrl}/getSingleCart`, { params })

  }
}
