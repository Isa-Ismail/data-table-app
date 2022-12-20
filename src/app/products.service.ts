import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverlessAPI } from './environments/env';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  sortProducts(opt: string) { 
    return this.http.get(`${serverlessAPI}/products?sort=${opt}`);
  }
  getProducts(page: number, perPage: number, sort: string) {
  return this.http.get(`${serverlessAPI}/products?page=${page}&perPage=${perPage}&sort=${sort}`);
  }
  sendDataToAPI(data: any) {
    return this.http.post('https://api.example.com/post', data);
  }
}
