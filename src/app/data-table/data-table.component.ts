import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: any;
  name = 'isa'
  constructor(private prod: ProductsService) { }

  ngOnInit() {
    this.prod.getProducts().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }
}
