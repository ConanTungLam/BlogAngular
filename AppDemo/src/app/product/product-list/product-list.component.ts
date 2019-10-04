import { Component, OnInit } from '@angular/core';
import { ProductService, product } from 'src/app/service/product.service';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

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
    public readonly swalTargets: SwalPortalTargets
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

    this.productService.deleteProduct(id);
    this.getListProducts();
  }

  
}
