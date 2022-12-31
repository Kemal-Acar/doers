import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AcceptDeclineGridComponent } from './accept-decline-grid.component';


@NgModule({
    declarations: [AcceptDeclineGridComponent],
    imports: [IonicModule, CommonModule],
    exports: [AcceptDeclineGridComponent]
})
export class AcceptDeclineGridModule { }
