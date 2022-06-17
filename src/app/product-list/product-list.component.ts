import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productChanged.subscribe((recipe: Product[]) => {
      this.products = recipe;
    });
    this.products = this.productService.getproducts();
  }
}
