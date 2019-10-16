import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
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
  listItem: product[];
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
      this.listItem = data;
      // this.dataSource = new MatTableDataSource(this.listItem);
      // this.dataSource.sort = this.sort;
    })
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
    this.listItem = [];
    this.cartService.productList = [];
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

  plusItem(product){
    if(product.count >= product.amount){
      Swal.fire({
        title: 'Lỗi',
        text: 'Kho hàng không đủ số lượng!',
        type: 'error',
        timer: 1500
      })
    }
    else{
      product.count = product.count + 1;
    }
  }

  minusItem(product){
    if(product.count > 1){
      product.count = product.count - 1;
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

  public totalPrice = this.cartService.getMoneyForCart();



}
