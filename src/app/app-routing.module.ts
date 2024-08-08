import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  {
    path: 'aboutme',
    component: AboutMeComponent,
  },

  {
    path: 'hobbies',
    loadChildren: () => import('./components/hobbies/hobbies.module').then(m => m.HobbiesModule)
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },

  { path: 'contact', component: ContactComponent },

  {
    path: '**',
    redirectTo: '/aboutme',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
