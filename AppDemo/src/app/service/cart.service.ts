import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { product, ProductService } from './product.service';
import { SwalPortalTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

export interface cartItem {
  product: product;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productItems: cartItem[] = [];
  listProducts: product[];
  constructor(
    private productService: ProductService
  ) { }


  getListProductInCard() {
    return of(this.productItems);
  }

  removeProductToCard(id: number) {
    let productIndex = this.getProductIndex(id);
    this.productItems.splice(productIndex, 1);
  }

  addProductToCard(product: any) {
    let productIndex = this.getProductIndex(product.id);

    if (productIndex > -1) {
      if (this.productItems[productIndex].count >= this.productItems[productIndex].product.amount) {
        
        alert('Kho hàng đã hết! Chức năng đang hoàn thiện!')
        
      }
      else {
        this.productItems[productIndex].count += 1;
       
      }

    } else {
      this.productItems.push({
        product: product,
        count: 1
      });
    }
  }

  deleteOverItem(){
    
  }

  getProductIndex(productId: number) {
    return this.productItems.findIndex(x => x.product.id == productId);
  }

  getNumberProductInCard() {
    return this.productItems.length;
  }

  clearCart() {
    this.productItems = [];
  }



}
