import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './components/vertical/vertical.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';

@NgModule({
  declarations: [
    VerticalComponent,
    HorizontalComponent,
     ],
   imports: [
    CommonModule
  ],
})
export class SharedModule { }
