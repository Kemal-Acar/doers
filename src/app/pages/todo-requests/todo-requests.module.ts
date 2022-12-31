import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoRequestsPageRoutingModule } from './todo-requests-routing.module';

import { TodoRequestsPage } from './todo-requests.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ItemCardModule } from 'src/app/components/item-card/item-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoRequestsPageRoutingModule,
    SharedModule,
    ItemCardModule
  ],
  declarations: [TodoRequestsPage]
})
export class TodoRequestsPageModule {}
