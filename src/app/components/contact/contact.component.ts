import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('visibleHidden', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      transition('* => visible', [animate('1s')]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  public password: string = '';
  public displayInfo: boolean = false;
  public insertedPassword = '';
  public displayWrong: boolean = false;
  public pdfSource: string = 'assets/docs/2023_Yingsiu_Lebenslauf.pdf';
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.generatePassword();

    if (localStorage.getItem('pwRight') === '1337') {
      this.displayInfo = true;
    }
  }

  private generatePassword() {
    this.password = Math.random().toString(36).slice(2).slice(5);
  }

  public checkPassword() {
    if (this.insertedPassword === this.password) {
      this.displayInfo = true;
      localStorage.setItem('pwRight', '1337');
    } else {
      this.displayWrong = true;
    }
  }
}
