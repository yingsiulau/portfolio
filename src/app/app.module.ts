import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  NgbModule,
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImageDialogComponent } from './components/projects/image-dialog/image-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataService } from './service/data.service';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavbarComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgbModule,
    NgbCarouselModule,
    PdfViewerModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [NgbCarouselConfig, DataService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
