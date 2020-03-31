import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ImkereiComponent } from './imkerei/imkerei.component';
import { HonigComponent } from './honig/honig.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdukteComponent } from './produkte/produkte.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        ImkereiComponent,
        HonigComponent,
        CarouselComponent,
        ProdukteComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
