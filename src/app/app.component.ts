import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yingsiu Lau';

  constructor() {
    if (localStorage.getItem('pwRight') !== 'true') {
      localStorage.setItem('pwRight', '');
    }
  }
}
