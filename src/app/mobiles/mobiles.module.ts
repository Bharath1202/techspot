import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';
import { TreeModule } from '@smart-webcomponents-angular/tree';
import { CardModule } from '@smart-webcomponents-angular/card';
import { TabsModule } from '@smart-webcomponents-angular/tabs';
import { ButtonModule } from '@smart-webcomponents-angular/button';
@NgModule({
  declarations: [
    MobileListComponent,
    MobileViewComponent
  ],
  imports: [
    CommonModule,
    MobilesRoutingModule,
    TreeModule,
    CardModule,
    TabsModule,
    ButtonModule
  ]
})
export class MobilesModule { }
