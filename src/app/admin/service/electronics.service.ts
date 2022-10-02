import { HttpClient } from '@angular/common/http';
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
}
