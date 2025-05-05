import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>{
      return import('./home/home.component').then(m => m.HomeComponent);
    },
  },
  {
    path: 'contact',
    loadComponent:() =>{
      return import('./contact/contact.component').then(m => m.ContactComponent);
    }
  }
];
