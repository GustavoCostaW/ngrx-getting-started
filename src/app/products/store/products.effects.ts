import { ProductsService } from './../../core/products.service';

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  mergeMap,
  map
} from 'rxjs/operators';
import {
   LoadProductsSuccess, AddProductSuccess} from './products.actions';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
    ) {
    }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(
      '[Products] Load Products'
    ),
    mergeMap(() => {
      return this.productService.getAll().pipe(
        map(products => new LoadProductsSuccess(products))
      );
    })
  );

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(
      '[Products] Add Product'
      ),
    mergeMap((action: any) => {
      return this.productService.save(action.payload).pipe(
        map( () => new AddProductSuccess())
      );
    })
  );
}
