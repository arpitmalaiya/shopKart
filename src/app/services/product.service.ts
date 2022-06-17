import { Injectable } from '@angular/core';
import { Product } from '../shared/products.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productChanged = new Subject<Product[]>();

  private products: Product[] = [];
  shoppingCartItems: Product[] = [];

  constructor(
    private slService: ShoppingListService,
    private dataService: DataStorageService
  ) {}

  getShoppingItems() {
    return this.shoppingCartItems.slice();
  }
  addItemToShopingCart(index){
    this.shoppingCartItems.push(this.products[index])
  }
  getproducts() {
    return this.products.slice();
  }
  getproduct(index: number) {
    return this.products[index];
  }

  setproduct(product: Product[]) {
    this.products = product;
    this.productChanged.next(this.products.slice());
  }

  addIngToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredientsfromRecipe(ingredient);
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.productChanged.next(this.products.slice());
    this.dataService.storeProduct(this.products);
  }
  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productChanged.next(this.products.slice());
    this.dataService.storeProduct(this.products);
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productChanged.next(this.products.slice());
    this.dataService.storeProduct(this.products);
  }
}
