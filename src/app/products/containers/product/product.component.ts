import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AddProduct, EditProduct, LoadProductById } from '../../store/products.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public productForm: FormGroup;
  public mode: string;
  public editModeId;
  public subscriptions = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private actRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: [undefined],
      qty: [undefined]
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      this.actRouter.paramMap.subscribe(paramsMap => {
        this.editModeId = parseInt(paramsMap.get('id'), 10);
        this.defineMode();
      })
    );

    this.subscriptions.push(
      this.store.select('products')
        .pipe(filter(state => state.currentProduct)).subscribe(v => {
          this.productForm.patchValue({ ...v.currentProduct });
        })
    );
  }

  defineMode() {
    if (!this.editModeId) {
      this.mode = 'NEW';
    } else {
      this.mode = 'EDIT';

      this.store.dispatch(new LoadProductById(this.editModeId));
    }
  }

  addProduct() {

    const newProduct = {
      ...this.productForm.value
    };

    this.store.dispatch(new AddProduct(newProduct));
  }

  editProduct() {
    this.store.dispatch(new EditProduct({ id: this.editModeId, data: this.productForm.value }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach( subs => subs.unsubscribe());
  }
}
