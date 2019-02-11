import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private db: AngularFirestore
  ) { }

  save(data): Observable<any> {
    return of(this.db.collection('products').add(data));
  }

  getAll(): Observable<any> {
    return this.db.collection('products').snapshotChanges()
      .pipe(
        map((actions) => {
          const products = actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });

          return products;
        })
      );
  }
  getById(id): Observable<any> {
    return this.db.collection('products').doc(id).get();
  }

  delete(id): Observable<any> {
    return of(this.db.collection('products').doc(id).delete());
  }

  update(id, data): Observable<any> {
    return of(this.db.collection('products').doc(id).set(data));
  }

}
