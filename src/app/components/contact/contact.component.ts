import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public password: string = '';
  public displayInfo: boolean = false;
  public insertedPassword = ''

  ngOnInit(): void {
    this.generatePassword();
  }

  private generatePassword() {
    this.password = Math.random().toString(36).slice(2).slice(5).toUpperCase();
    console.log(this.password);
  }

  public checkPassword(insertedPassword: string) {
    console.log(insertedPassword);

    if (insertedPassword === this.password) {
      this.displayInfo = true;
    }
  }
}
