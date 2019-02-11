import { EffectsModule } from '@ngrx/effects';
import { ProductsComponent } from './containers/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './containers/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/products.reduce';
import { ProductEffects } from './store/products.effects';


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
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects]),
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
