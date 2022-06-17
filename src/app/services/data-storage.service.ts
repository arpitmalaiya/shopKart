import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/products.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private https: HttpClient,
  ) {}

  storeProduct(products:Product[]) {
    this.https
      .put(
        'https://angular-shoppinglist-am.firebaseio.com/products.json',
        products
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchProducts() {
    return this.https.get<Product[]>(
      'https://angular-shoppinglist-am.firebaseio.com/products.json'
    );
  }
}
