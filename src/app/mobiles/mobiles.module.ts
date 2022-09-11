import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';


@NgModule({
  declarations: [
    MobileListComponent,
    MobileViewComponent
  ],
  imports: [
    CommonModule,
    MobilesRoutingModule
  ]
})
export class MobilesModule { }
