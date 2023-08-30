import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ProjectsComponent } from './components/projects/projects.component';
import {
  NgbModule,
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavbarComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
