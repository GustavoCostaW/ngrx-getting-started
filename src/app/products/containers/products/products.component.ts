import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.products$ = this.store.select('products');
  }
}
