import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseURL = "http://localhost:8090/shop/all";
  constructor(private httpClient : HttpClient) { }
  
    
  getShopsList(): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>("${this.baseURL}");
  }
}
