import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverlessAPI } from './environments/env';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  @Input() cart: number = 0;
  items = [];
  total: number;

  constructor(private http: HttpClient) { }
  
  sortProducts(opt: string) { 
    return this.http.get(`${serverlessAPI}/products?sort=${opt}`);
  }

  getProducts(page: number, perPage: number, sort: string) {
  return this.http.get(`${serverlessAPI}/products?page=${page}&perPage=${perPage}&sort=${sort}`);
  }

  sendDataToAPI(data: any) {
    return this.http.post(`${serverlessAPI}/products`, data);
  }

  addToCart(product, quantity) {
    this.cart++;
    this.items.push({
      product: product,
      quantity: quantity,
      totalPrice: product.price * quantity
    });
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.totalPrice;
    }
    this.total = total;
    return total;
  }
}
