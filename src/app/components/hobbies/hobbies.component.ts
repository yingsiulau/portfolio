import { AfterViewInit, Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hobbies',
  standalone: false,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent implements AfterViewInit {
  constructor(public dataService: DataService) {
  }

  ngAfterViewInit() {
    const images = document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.onload = () => {
              img.classList.add('loaded');
            };
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      observer.observe(img);
    });
  }

  public openDialog(path: string): void {
    this.dataService.openDialog(path);
  }
}
