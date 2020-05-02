import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImpressumComponent } from './impressum/impressum.component';
import { SachkundenachweisComponent } from './sachkundenachweis/sachkundenachweis.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        ImpressumComponent,
        SachkundenachweisComponent
    ]
})
export class ExamplesModule { }
