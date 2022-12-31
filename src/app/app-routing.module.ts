import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./pages/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./pages/new-item/new-item.module').then( m => m.NewItemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
