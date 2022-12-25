import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable} from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = `${environment.production ? environment.apiProdUrl : environment.apiDevUrl}/product`;
  product :Product;

  constructor(private http : HttpClient) { }

  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}`);
  }

  save(product: Product, shopId: number): Observable<Product>{
    return this.http.post<Product>(`${this.baseURL}?shopId=${shopId}`, product);
  }
  update(id:number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseURL}/${id}`, product);
  }
  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
  findByShopId(shopId: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}?shopId=${shopId}`);
  }

}
