import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cart = []
  q: number = 1;
  data: any;
  page: number = 0;
  perPage: number = 10;
  sort: string = ''
  constructor(private prod: ProductsService) { }
  ngOnInit() {
    this.prod.getProducts(this.page, this.perPage, this.sort).subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }

  addToCart(product) {
    this.cart.find(item => item.product._id === product._id) ?  this.cart : this.prod.addToCart(product, this.q);this.cart = this.prod.items;
    console.log(this.cart);
  }
}