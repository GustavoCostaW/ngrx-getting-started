import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
        this.editModeId = paramsMap.get('id');
        this.defineMode();
      })
    );
  }

  defineMode() {
    if (!this.editModeId) {
      this.mode = 'NEW';
    } else {
      this.mode = 'EDIT';
    }
  }

  addProduct() {
    // this.store.dispatch(new AddProduct({ id: Math.round(Math.random() * 100), ...this.productForm.value }));
  }
}
