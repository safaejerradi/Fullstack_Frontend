import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from '../models/shop';
import { Observable} from 'rxjs';
import { environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseURL = environment.production ? `${environment.apiProdUrl}/shops` : `${environment.apiDevUrl}/shops`;
  
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

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
