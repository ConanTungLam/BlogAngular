import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService, cartItem } from 'src/app/service/cart.service';
import { product } from 'src/app/service/product.service';
import { SwalPortalTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  productItems: cartItem[];
  // dataSource = new MatTableDataSource();
  // displayedColumns: string[] = ['id', 'name', 'price', 'amount', 'action'];
  
  // @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
  //   this.dataSource.sort = sort;
  // }

  constructor(
    private cartService: CartService,
    public readonly swalTargets: SwalPortalTargets,
  ) { }

  ngOnInit() {
    this. getShoppingCartItem() 

  }


  getShoppingCartItem(){

    this.cartService.getListProductInCard().subscribe(data => {
      this.productItems = data;
    })

    console.log(this.cartService.productItems);
  }

  cancelResetCart(){
    Swal.fire({
      title: 'Thất Bại!',
      text: 'Bạn đã hủy tác vụ đặt lại giỏ hàng!',
      type: 'error',
      timer: 2000
    })
  }

  resetCart(){
    this.productItems = [];
    this.cartService.clearCart();
    Swal.fire({
      title: 'Hoàn Tất!',
      text: 'Giỏ hàng đã được đặt lại!',
      type: 'success',
      timer: 2000
    })
  }

  deleteCartItem(product){

    this.cartService.removeProductToCard(product.id);
    this.getShoppingCartItem()

  }

  heartEffect(){
    $('.like-btn').on('click', function () {
      $(this).toggleClass('is-active');
    });
  }

  plusItem(productItem){
    if(productItem.count >= productItem.product.amount){
      Swal.fire({
        title: 'Lỗi',
        text: 'Kho hàng không đủ số lượng!',
        type: 'error',
        timer: 1500
      })
    }
    else{
      productItem.count = productItem.count + 1;
      Swal.fire({
        title: 'Tăng!',
        text: 'Bạn vừa tăng 1 sản phẩm!',
        type: 'success',
        timer: 500
      })
    }
  }

  minusItem(productItem){
    if(productItem.count > 1){
      productItem.count = productItem.count - 1;
      Swal.fire({
        title: 'Giảm!',
        text: 'Bạn vừa giảm 1 sản phẩm!',
        type: 'success',
        timer: 500
      })
    }
    else{
      Swal.fire({
        title: 'Lỗi',
        text: 'Chọn xóa món hàng nếu bạn không cần nữa!',
        type: 'error',
        timer: 1500
      })
    }

  }

  getTotalPrice(){
    let total = 0;
    for(var i = 0; i < this.productItems.length; i++){
      total = total + this.productItems[i].count*this.productItems[i].product.price
    }
    return total;
  }

}
