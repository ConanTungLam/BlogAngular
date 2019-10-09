import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/service/product.service';
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
    private cartService: CartService
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


}
