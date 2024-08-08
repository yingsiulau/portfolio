import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hobbies',
  standalone: false,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  constructor(public dataService: DataService) {
  }

  public openDialog(path: string): void {
    this.dataService.openDialog(path);
  }
}
