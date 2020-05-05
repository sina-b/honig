import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ImpressumComponent } from './examples/impressum/impressum.component';
import { SachkundenachweisComponent } from './examples/sachkundenachweis/sachkundenachweis.component';
import { ImkereiComponent } from './components/imkerei/imkerei.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'home/regionalerHonig',             component: ImkereiComponent },
    { path: 'impressum',     component: ImpressumComponent },
    { path: 'sachkunde',     component: SachkundenachweisComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
