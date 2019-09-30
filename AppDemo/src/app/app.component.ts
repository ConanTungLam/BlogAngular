import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppDemo';
  public full = false;
  fill() {
    this.full = !this.full;
    document.getElementById("logocontainer").style.backgroundColor = this.full ? "#3ebffa" : "transparent";
  }
}
