import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { serverlessAPI } from '../environments/env';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  categories: string[] = ['electronics', 'grocery', 'fashion', 'home', 'sports'];
  origin: string[] = ['Europe', 'china', 'Africa', 'USA', 'India'];
  best : boolean[] = [true, false];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      productShortCode: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required],
      isBest: [''],
      origin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post(`${serverlessAPI}/products`, this.form.value).subscribe(data => {
        console.log(data);
      });
      console.log(this.form.value);
    }
  }
}
