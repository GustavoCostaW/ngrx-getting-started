import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/containers/products/products.component';
import { environment } from 'src/environments/environment';


const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/products'
  }
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ProductsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
