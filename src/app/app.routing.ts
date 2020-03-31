import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ImpressumComponent } from './examples/impressum/impressum.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'impressum',     component: ImpressumComponent }
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
