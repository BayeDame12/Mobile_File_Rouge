import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
