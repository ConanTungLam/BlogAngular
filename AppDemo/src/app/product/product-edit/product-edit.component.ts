import { Component, OnInit } from '@angular/core';
import { ProductService, product } from 'src/app/service/product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productID: any;
  editProductForm: FormGroup = null;



  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private staticRouter: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.createForm();

    this.route.paramMap.subscribe(params => {
      this.productID = +params.get('productId');
      this.productService.getSingleProduct(this.productID).subscribe(
        (data) => {
          console.log(data);
        
          this.editProductForm.setValue({
            name : data.name,
            description : data.description,
            price: data.price,
            amount: data.amount
          })
        }
      )
    });

 
  }

  createForm(){
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  saveProduct(){
    const formData = this.editProductForm.value;

    const productData = {
      id: this.productID,
      name : formData.name,
      description : formData.description,
      price: formData.price,
      amount: formData.amount
    }

    this.productService.updateProduct(productData).subscribe(data => {
      this.staticRouter.navigate(['./product/list']);
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
