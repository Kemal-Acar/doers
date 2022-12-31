import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ItemCardModule } from 'src/app/components/item-card/item-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    SharedModule,
    ItemCardModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
