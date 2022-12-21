import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: DataTableComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'product/create', component: CreateProductComponent },
  { path: 'my-cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
