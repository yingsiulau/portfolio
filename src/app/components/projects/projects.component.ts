import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  slideNumber: number = 1;

  public onSlide(slideEvent: NgbSlideEvent) {
    this.slideNumber = +slideEvent.current;
  }

  public displayText(slide: number): string {
    switch (slide) {
      case 1:
        return '<h2>slide 1</>';
      case 2:
        return 'slide 2';

      case 3:
        return 'slide 3';

      default:
        return 'error';
    }
  }
}
