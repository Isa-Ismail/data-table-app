import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: any;

    constructor(private route: ActivatedRoute, private prod: ProductsService) { }

    ngOnInit() {
      this.getProduct();
    }

    getProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.prod.getProduct(id).subscribe(data => {
        this.product = data;
      });
    }
}