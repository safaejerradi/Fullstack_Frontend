import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'api/products'
  product :Product;
  constructor(private http : HttpClient) { }
  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }

  save(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseURL}`, product);
  }
}
