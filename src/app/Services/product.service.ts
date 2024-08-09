import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetAllProduct(): Observable<any>{
    return this.http.get('/Product/GetAllProduct').pipe(take(1))
  }
  GetProductById(id:number){
    return this.http.get(`/Product/GetPtoductById/${id}`)
  }
}
