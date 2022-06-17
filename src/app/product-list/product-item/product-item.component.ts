import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('product101') product!:Product;
  @Input() index!:number
  constructor( private router:Router, private productService : ProductService) { }

  ngOnInit(): void {
  }

  addtToCart(){
    this.productService.addItemToShopingCart(this.index)
    alert("Added to cart")
  }
  editItem(){
    this.router.navigate(['/productDetails',this.index]);
  }
  deleteItem(){
    this.productService.deleteProduct(this.index)
  }
}
