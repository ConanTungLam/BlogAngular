import { Component, OnInit } from '@angular/core';
import { ProductService, product } from 'src/app/service/product.service';
import { SwalPortalTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[];
  currentProduct: product = null;
  countNumberCart: any
  items: any =
    [
      { name: "archie", e: 'hell', o: 1 },
      { name: "jake", e: 'hell', o: 1 },
      { name: "richard", e: 'hell', o: 1 }
    ];
  constructor(
    private productService: ProductService,
    public readonly swalTargets: SwalPortalTargets,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getListProducts();
    console.log(this.getListProducts())
  }

  getListProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  viewProduct(product: product) {
    this.currentProduct = product;
  }

  addIssue() {
    alert('Chức năng đang hoàn thiện!')
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.getListProducts();
    Swal.fire({
      title: 'Thành Công!',
      text: 'Sản phẩm đã được lưu!',
      type: 'success',
      timer: 2000
    })
  }

  cancelProduct() {
    Swal.fire({
      title: 'Thất Bại!',
      text: 'Bạn đã hủy tác vụ xóa!',
      type: 'error',
      timer: 2000
    })
  }

  addProductToCart(product) {
    this.cartService.addProductToCard(product);

    Swal.fire({
      title: 'Hoàn Tất!',
      text: 'Sản phẩm đã được thêm vào giỏ hàng!',
      type: 'success',
      timer: 2000
    })
  }


}
