import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyComponent } from './components/baby/baby.component';
import { BeautyAndPersonalCareComponent } from './components/beauty-and-personal-care/beauty-and-personal-care.component';
import { ComputerComponent } from './components/computer/computer.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HomeAndKitchenComponent } from './components/home-and-kitchen/home-and-kitchen.component';
import { LuggageComponent } from './components/luggage/luggage.component';
import { MensFashionComponent } from './components/mens-fashion/mens-fashion.component';
import { SoftwareComponent } from './components/software/software.component';

const routes: Routes = [
  {
    path:'baby',component:BabyComponent
  },
  {
    path:'computer',component:ComputerComponent
  },
  {
    path:'beautyAndPersonalCare',component:BeautyAndPersonalCareComponent
  },
  {
    path:'computer',component:ComputerComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  },
  {
    path:'homeAcessories',component:HomeAndKitchenComponent
  },
  {
    path:'luggage',component:LuggageComponent
  },
  {
    path:'mensFashion',component:MensFashionComponent
  },
  {
    path:'software',component:SoftwareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
