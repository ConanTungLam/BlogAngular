import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList : product[] = [];

  constructor() { }


  getListProductInCard(){
    return of (this.productList);
  }

  removeProductToCard (id){
    const index = this.productList.findIndex(data => data.id === id);
    this.productList.splice(index, 1);
    
  }

  addProductToCard (product: any){
    this.productList.push(product);
    
  }

  getNumberProductInCard(){
    return this.productList.length;
  }


}
