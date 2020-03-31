import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        ImpressumComponent
    ]
})
export class ExamplesModule { }
