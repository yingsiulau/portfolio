import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public password: string = '';
  public displayInfo: boolean = false;
  public insertedPassword = '';
  public displayWrong: boolean = false;

  ngOnInit(): void {
    this.generatePassword();
    this.displayInfo = Boolean(localStorage.getItem('pwRight'));
  }

  private generatePassword() {
    this.password = Math.random().toString(36).slice(2).slice(5);
  }

  public checkPassword() {
    if (this.insertedPassword === this.password) {
      this.displayInfo = true;
      localStorage.setItem('pwRight', 'true');
    } else {
      this.displayWrong = true;
    }
  }
}
