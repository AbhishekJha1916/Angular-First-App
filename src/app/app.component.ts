import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  screen1 = 0;
  screen2 = 0;
  screen3 = 0;

  sum = () => {
    this.screen3 = this.screen1+this.screen2;
  }
  sub = () => {
    this.screen3 = this.screen1-this.screen2;
  }
  prod = () => {
    this.screen3 = this.screen1*this.screen2;
  }
  div = () => {
    this.screen3 = this.screen1/this.screen2;
  }
  mod = () => {
    this.screen3 = this.screen1%this.screen2;
  }
}
