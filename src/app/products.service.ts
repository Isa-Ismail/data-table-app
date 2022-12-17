import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
  return this.http.get('https://ict-6.vercel.app/api/auth');
  }
  sendDataToAPI(data: any) {
    return this.http.post('https://api.example.com/post', data);
  }
}
