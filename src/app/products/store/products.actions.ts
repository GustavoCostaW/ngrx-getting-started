import { Action } from '@ngrx/store';

export enum ProductsActionsType {
  AddProduct = '[Products] Add Product',
  EditProduct = '[Products] Edit Product',
  RemoveProduct = '[Products] Remove Product',
  LoadProductById = '[Products] Load Product by Id'
}

export class AddProduct implements Action {
  readonly type = ProductsActionsType.AddProduct;

  constructor(public payload) {}
}

export class EditProduct implements Action {
  readonly type = ProductsActionsType.EditProduct;

  constructor(public payload) {}
}

export class RemoveProduct implements Action {
  readonly type = ProductsActionsType.RemoveProduct;

  constructor(public payload) {}
}


export class LoadProductById implements Action {
  readonly type = ProductsActionsType.LoadProductById;

  constructor(public payload) {}
}
