import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Category } from '../models/category';
import { Observable} from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = environment.production ? `${environment.apiProdUrl}/category` : `${environment.apiDevUrl}/category`;
  category : Category;
  
  constructor(private http : HttpClient) { }

  findById(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.baseURL}/${id}`);
  }

  findAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseURL}`);
  }
  save(category: Category, productId: number): Observable<Category>{
    return this.http.post<Category>(`${this.baseURL}?productId=${productId}`, category);

}
update(id:number, category:Category): Observable<Category>{
  return this.http.put<Category>(`${this.baseURL}/${id}`, category);
}

delete(id: number): Observable<void>{
  return this.http.delete<void>(`${this.baseURL}/${id}`);
}
}