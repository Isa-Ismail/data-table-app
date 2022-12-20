import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
}
