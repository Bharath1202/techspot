import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TreeModule } from '@smart-webcomponents-angular/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    TreeModule,
  ],
})
export class LayoutModule { }
