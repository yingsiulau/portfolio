import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

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
  public pdfSource: string = 'assets/docs/Yingsiu_Lau_Dossier_2025.pdf';
  public isLoaded = false;

  constructor(public dataService: DataService) { }

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