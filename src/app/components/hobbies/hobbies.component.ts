import { AfterViewInit, Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import { albumData } from './../../../assets/songlist'
@Component({
  selector: 'app-hobbies',
  standalone: false,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent implements AfterViewInit {
  public currentDirection: string = '';
  public albumIndex: number = 0;
  public albumCollection: AlbumCollection = albumData;

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
  onNextClick() {
    this.albumIndex = (this.albumIndex + 1) % this.albumCollection.albums.length; // Adjust for texture count
  }

  onPrevClick() {
    this.albumIndex = (this.albumIndex - 1 + this.albumCollection.albums.length) % this.albumCollection.albums.length; // Adjust for texture count
  }


  public openDialog(path: string): void {
    this.dataService.openDialog(path);
  }

}
