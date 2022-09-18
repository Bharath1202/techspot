import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberValidationDirective } from './number-validation.directive';



@NgModule({
  declarations: [
    NumberValidationDirective
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
