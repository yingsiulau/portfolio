import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showName = false;

  constructor(public router: Router, public dataService: DataService) {
    this.router.events.subscribe(() => {
      if (this.router.url.toString() === '/aboutme') {
        this.showName = false;
      } else {
        this.showName = true;
      }
    });
  }

  ngOnInit(): void {}
}
