import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  private baseUrl = environment.apiUrl + '/mobile'
  constructor(private httpClient: HttpClient) { }

  saveElectronics(data) {
    return this.httpClient.post(`${this.baseUrl}`, data)
  }
  getAllElectronics() {
    return this.httpClient.get(`${this.baseUrl}`)
  }
  getSingleElectronics(id) {
    const params = new HttpParams().append('_id', id);
    return this.httpClient.get(`${this.baseUrl}/getSingleMobile`, { params })
  }
  updateElectronics(data) {
    return this.httpClient.put(`${this.baseUrl}`, data)
  }
}
