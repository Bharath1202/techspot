import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';

const routes: Routes = [
  {
    path: 'mobileList',
    component: MobileListComponent,
  },
  {
    path: 'view',
    component: MobileViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilesRoutingModule { }
