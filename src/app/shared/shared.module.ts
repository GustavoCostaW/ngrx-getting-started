import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
})
export class SharedModule { }
