import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRequestsPageRoutingModule } from './user-requests-routing.module';

import { UserRequestsPage } from './user-requests.page';
import { UserCardModule } from 'src/app/components/user-card/user-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRequestsPageRoutingModule,
    UserCardModule
    ],
  declarations: [UserRequestsPage]
})
export class UserRequestsPageModule {}
