import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';
import { RouterModule, Routes } from '@angular/router';
import { CanvasContainerComponent } from '../canvas-container/canvas-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: '',
    component: HobbiesComponent
  }
];

@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    CanvasContainerComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class HobbiesModule { }
