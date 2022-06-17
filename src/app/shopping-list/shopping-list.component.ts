import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/products.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private productService : ProductService) { }

  items:Product[]

  ngOnInit(): void {
   this.items =  this.productService.getShoppingItems()
  }

}
