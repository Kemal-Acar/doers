import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsPage } from './requests.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPage,
    children: [
      {
        path: 'user-requests',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-requests/user-requests.module').then(m => m.UserRequestsPageModule)
          }
        ]
      },
      {
        path: 'todo-requests',
        loadChildren: () => import('../todo-requests/todo-requests.module').then(m => m.TodoRequestsPageModule)
      },
      {
        path: '',
        redirectTo: '/main-tabs/requests/user-requests',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main-tabs/requests/user-requests',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RequestsPageRoutingModule { }