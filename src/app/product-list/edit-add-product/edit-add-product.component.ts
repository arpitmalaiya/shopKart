import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/products.model';

@Component({
  selector: 'app-edit-add-product',
  templateUrl: './edit-add-product.component.html',
  styleUrls: ['./edit-add-product.component.scss'],
})
export class EditAddProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  productForm!: FormGroup;
  idx: number;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required),
      productSKU: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      availableQty: new FormControl('', Validators.required),
    });
    this.idx = +this.route.snapshot.paramMap.get('idx');
    if (this.idx !== null) {
      this.prePopulateForm();
    }
  }

  prePopulateForm() {
    const productDetail: Product = this.productService.getproduct(this.idx);
    this.productForm.setValue({
      productName: productDetail.productName,
      productId: productDetail.productId,
      productSKU: productDetail.productSKU,
      productPrice: productDetail.productPrice,
      availableQty: productDetail.availableQty,
    });
  }

  onSubmit() {
    if (this.idx !== null) {
      this.productService.updateProduct(this.idx, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.router.navigate(['/productList']);
  }

  onCancel() {
    this.router.navigate(['/productList']);
  }
}
