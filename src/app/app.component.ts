import { Component, HostListener } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yingsiu Lau';

  constructor(public dataService: DataService) {
    this.getScreenSize(0);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(_event: any) {
    this.dataService.windowHeight.next(window.innerHeight);
    this.dataService.windowWidth.next(window.innerWidth);

    if (localStorage.getItem('pwRight') !== '1337') {
      localStorage.setItem(
        'pwRight',
        'Changing this value to true doesn\x27t make the magic happen'
      );
    }
  }
}
