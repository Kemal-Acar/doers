import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AcceptDeclineGridModule } from '../accept-decline-grid/accept-decline-grid.module';
import { UserCardComponent } from './user-card.component';



@NgModule({
    declarations: [UserCardComponent],
    imports: [IonicModule, CommonModule, AcceptDeclineGridModule],
    exports: [UserCardComponent]
})
export class UserCardModule { }
