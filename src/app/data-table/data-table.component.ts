import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: any;
  page: number = 0;
  perPage: number = 10;
  sort: string = ''

  constructor(private prod: ProductsService) { }

  inc(): void {
    this.page++;
    this.ngOnInit();
  }
  dec(): void {
    this.page>0&&this.page--;
    this.ngOnInit();
  }
  ngOnInit() {
    this.prod.getProducts(this.page, this.perPage, this.sort).subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }
}
