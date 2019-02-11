import { Action } from '@ngrx/store';

export enum ProductsActionsTypes {
  AddProduct = '[Products] Add Product',
  AddProductSuccess = '[Products] Add Product Success',
  EditProduct = '[Products] Edit Product',
  EditProductSuccess = '[Products] Edit Product Success',
  RemoveProduct = '[Products] Remove Product',
  RemoveProductSuccess = '[Products] Remove Product Success',
  LoadProductById = '[Products] Load Product by Id',
  LoadProductByIdSuccess = '[Products] Load Product by Id Success',
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
}
export class LoadProducts implements Action {
  readonly type = ProductsActionsTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionsTypes.LoadProductsSuccess;

  constructor(public payload) {}
}

export class LoadProductById implements Action {
  readonly type = ProductsActionsTypes.LoadProductById;
  constructor(public payload) {}
}

export class LoadProductByIdSuccess implements Action {
  readonly type = ProductsActionsTypes.LoadProductByIdSuccess;

  constructor(public payload) {}
}

export class AddProduct implements Action {
  readonly type = ProductsActionsTypes.AddProduct;

  constructor(public payload) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductsActionsTypes.AddProductSuccess;
}

export class EditProduct implements Action {
  readonly type = ProductsActionsTypes.EditProduct;

  constructor(public payload) {}
}

export class EditProductSuccess implements Action {
  readonly type = ProductsActionsTypes.EditProductSuccess;
}

export class RemoveProduct implements Action {
  readonly type = ProductsActionsTypes.RemoveProduct;

  constructor(public payload) {}
}

export class RemoveProductSuccess implements Action {
  readonly type = ProductsActionsTypes.RemoveProductSuccess;
}
