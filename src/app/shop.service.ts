import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseURL = "http://localhost:8090/shop/1";
  constructor(private httpClient : HttpClient) { }

  getShop(): Observable<Shop>{
    return this.httpClient.get<Shop>(`${this.baseURL}`);
  }
}
