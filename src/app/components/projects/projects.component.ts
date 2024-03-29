import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  slideNumber: number = 1;
  currentImage: string = '';
  paused = false;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.slideNumber = 1;
  }

  public onSlide(slideEvent: NgbSlideEvent): void {
    this.slideNumber = +slideEvent.current;
  }

  public togglePaused(): void {
    this.paused = !this.paused;
    if (this.paused) {
      this.carousel.pause();
    } else {
      this.carousel.cycle();
    }
  }

  public displayText(): string {
    switch (this.slideNumber) {
      case 1:
        return '<h2>myPOLYPOINT</h2> <br> <p>Während meiner Tätigkeit an der Entwicklung von smartPEP, einer automatisierten Personaleinsatzplanung, erweiterte ich die myPOLYPOINT-App für Gesundheitsfachkräfte durch die Implementierung diverser Eingabemasken. Diese ermöglichten die Erfassung von Planungspräferenzen sowie Vereinbarungen der Mitarbeiter zur Personaleinsatzplanung.</p>';
      case 2:
        return '<h2>Shiftplaner</h2> <br> <p>Nachdem die Health Professionals ihre Präferenzen erfasst hatten, war es erforderlich, eine Möglichkeit für den Dienstplaner zu schaffen, diese Präferenzen zu überprüfen und gegebenenfalls anzupassen. Zu diesem Zweck habe ich die Funktion zur Übersicht der Planungspräferenzen für Dienstplaner implementiert.</p>';
      case 3:
        return '<h2>IPSP Planning Board </h2> <br> <p>Im Anschluss an die Implementierung der Eingabemaske in der myPOLYPOINT-App konzentrierte ich mich auf die Entwicklung der Stationsleitungsansicht. Diese Ansicht bietet eine umfassende Übersicht über die Planungspräferenzen und Vereinbarungen aller Mitarbeiter innerhalb eines Planblatts für die Stationsleitung. Sie ermöglicht eine detaillierte Analyse der Planungsqualität, einschließlich der Identifizierung von Ruhezeitverletzungen und nicht erfüllten Wünschen.</p>';

      default:
        return 'error';
    }
  }

  public openDialog(id: string): void {
    this.dataService.openDialog(id, () => {
      this.togglePaused();
    });
  }
}
