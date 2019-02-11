import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/containers/products/products.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';


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
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes
      ),
      ProductsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
