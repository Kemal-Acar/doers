import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AcceptDeclineGridModule } from '../accept-decline-grid/accept-decline-grid.module';
import { ItemCardComponent } from './item-card.component';



@NgModule({
    declarations: [ItemCardComponent],
    imports: [IonicModule, CommonModule, AcceptDeclineGridModule],
    exports: [ItemCardComponent]
})
export class ItemCardModule { }
