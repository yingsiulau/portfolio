import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
