import { Component } from '@angular/core';
import { CartService } from './service/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private cartService: CartService
  ){}

  title = 'App Demo';
  public full = false;
  fill() {
    this.full = !this.full;
    document.getElementById("logocontainer").style.backgroundColor = this.full ? "#3ebffa" : "transparent";
  }
}
