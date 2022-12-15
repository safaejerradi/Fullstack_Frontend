import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseURL = 'api/shops';  // URL to web api;
  // private baseURL = 'http://localhost:8090/shop';  // URL to web api;
  
  constructor(private http : HttpClient) { }

  findById(id: number): Observable<Shop>{
    return this.http.get<Shop>(`${this.baseURL}/${id}`);
  }

  findAll(): Observable<Shop[]>{
    return this.http.get<Shop[]>(`${this.baseURL}`);
  }

  save(shop: Shop): Observable<Shop>{
    return this.http.post<Shop>(`${this.baseURL}`, shop);
  }

  update(id:number, shop: Shop): Observable<Shop>{
    return this.http.put<Shop>(`${this.baseURL}/${id}`, shop);
  }
}
