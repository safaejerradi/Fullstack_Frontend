import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'api/products'
  constructor(private http : HttpClient) { }
  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }
}
