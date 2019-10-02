import { Component, OnInit } from '@angular/core';
import { ProductService, product } from 'src/app/service/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[];
  currentProduct: product = null;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }
 
  viewProduct(product:product){
    this.currentProduct = product;
  }

  addIssue(){
    alert('Chức năng đang hoàn thiện!')
  }

  deleteProduct(id:number){
    console.log(id);
    this.productService.deleteProduct(id);
    this.getListProducts();
  }
  
}
