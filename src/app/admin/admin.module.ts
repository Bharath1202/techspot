import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ComputerComponent } from './components/computer/computer.component';
import { MensFashionComponent } from './components/mens-fashion/mens-fashion.component';
import { WomensFashionComponent } from './components/womens-fashion/womens-fashion.component';
import { HomeAndKitchenComponent } from './components/home-and-kitchen/home-and-kitchen.component';
import { LuggageComponent } from './components/luggage/luggage.component';
import { SoftwareComponent } from './components/software/software.component';
import { ToolsAndHomeImprovementComponent } from './components/tools-and-home-improvement/tools-and-home-improvement.component';
import { BeautyAndPersonalCareComponent } from './components/beauty-and-personal-care/beauty-and-personal-care.component';
import { BabyComponent } from './components/baby/baby.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElectronicsListComponent } from './components/electronics-list/electronics-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ElectronicsComponent,
    ComputerComponent,
    MensFashionComponent,
    WomensFashionComponent,
    HomeAndKitchenComponent,
    LuggageComponent,
    SoftwareComponent,
    ToolsAndHomeImprovementComponent,
    BeautyAndPersonalCareComponent,
    BabyComponent,
    ElectronicsListComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgApexchartsModule,
  ]
})
export class AdminModule { }
