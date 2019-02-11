import { ProductsService } from './../../core/products.service';

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  mergeMap,
  map
} from 'rxjs/operators';
import {
   LoadProductsSuccess, AddProductSuccess, LoadProductByIdSuccess, RemoveProductSuccess, EditProductSuccess} from './products.actions';


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

  @Effect()
  loadById$ = this.actions$.pipe(
    ofType(
      '[Products] Load Product by Id'
      ),
    mergeMap((action: any) => {
      return this.productService.getById(action.payload)
             .pipe(map( snapshot => {
              return new LoadProductByIdSuccess(
                {id: action.payload, ...snapshot.data()}
              );
            }));
    })
  );

  @Effect()
  removeProduct$ = this.actions$.pipe(
    ofType(
      '[Products] Remove Product'
      ),
    mergeMap((action: any) => {
      return this.productService.delete(action.payload)
              .pipe(map(() => new RemoveProductSuccess()));
    })
  );

  @Effect()
  editProduct$ = this.actions$.pipe(
    ofType(
      '[Products] Edit Product'
      ),
    mergeMap((action: any) => {
      return this.productService.update(action.payload.id, action.payload.data)
              .pipe(map(() => new EditProductSuccess()));
    })
  );
}



