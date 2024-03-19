import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yingsiu Lau';

  constructor() {
    if (localStorage.getItem('pwRight') !== '1337') {
      localStorage.setItem(
        'pwRight',
        'changing this value to true doesnt make it work'
      );
    }
  }
}
