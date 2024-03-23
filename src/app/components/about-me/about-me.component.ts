import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, AfterViewChecked {
  public width: number = 0;

  public reversedOrder: boolean = true;

  constructor(public dataService: DataService) {
    this.width = this.dataService.windowHeight.value;
  }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    if (this.dataService.windowHeight.value < 425) {
      this.reversedOrder = true;
    }
  }
}
