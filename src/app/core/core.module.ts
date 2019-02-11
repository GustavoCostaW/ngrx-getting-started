import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductsService]
})
export class CoreModule { }
