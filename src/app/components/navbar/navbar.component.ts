import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showName = false;
  constructor(public router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url.toString() === '/') {
        this.showName = false;
      } else {
        this.showName = true;
      }
    });
  }

  ngOnInit(): void {}
}
