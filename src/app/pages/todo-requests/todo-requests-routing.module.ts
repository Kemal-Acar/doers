import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoRequestsPage } from './todo-requests.page';

const routes: Routes = [
  {
    path: '',
    component: TodoRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRequestsPageRoutingModule {}
