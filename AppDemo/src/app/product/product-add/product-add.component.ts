import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  addProductForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    amount: ['', Validators.required]
  })

  addNewProduct() {
 
      this.productService.addNewProduct(this.addProductForm.value);
      this.productService.getProducts();
      this.addProductForm.reset();
      this.location.back();
    
  }

}
