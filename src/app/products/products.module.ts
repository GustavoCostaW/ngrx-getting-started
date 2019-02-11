import { ProductsComponent } from './containers/products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './containers/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'new',
        component: ProductComponent,
      },
      {
        path: 'edit/:id',
        component: ProductComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  exports: [
    ProductsComponent
  ],
})

export class ProductsModule { }
