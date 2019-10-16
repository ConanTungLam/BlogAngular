import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { product, ProductService } from './product.service';
import { SwalPortalTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = [];
  private arrayIdItem = [];
  cartItem = {
    id: null,
    name: '',
    price: null,
    amount: null,
    count: 0,

  }

  constructor() { }


  getListProductInCard() {
    return of(this.productList);
  }

  removeProductToCard(id) {
    const index = this.productList.findIndex(data => data.id === id);
    this.productList.splice(index, 1);

  }

  addProductToCard(product: any) {
    this.cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: product.amount,
      count: 1
    }

    if (this.arrayIdItem.filter(x => x == product.id).length > 0) {
      for (var i = 0; i < this.productList.length; i++) {
        if (product.id == this.productList[i].id) {
          console.log([this.productList[i].count,this.productList[i].amount])
          if (this.productList[i].count >= this.productList[i].amount) {
            //do some thing
          }
          else {
            this.productList[i].count += 1;
            break;
          }

        }
      }
    }
    else {
      this.arrayIdItem.push(product.id);
      this.productList.push(this.cartItem);
    }
  }

  getMoneyForCart() {
    var total = 0;
    for (var k = 0; k < this.productList.length; k++) {
      total = total + this.productList[k].count * this.productList[k].price
    }
    return total
  }

  getMoneyForItem(product) {
    return product.price * product.count;
  }

  getNumberProductInCard() {
    return this.productList.length;
  }


}
