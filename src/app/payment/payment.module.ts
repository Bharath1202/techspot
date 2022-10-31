import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CardModule } from '@smart-webcomponents-angular/card';
import { TabsModule } from '@smart-webcomponents-angular/tabs';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';
import { BreadcrumbModule } from '@smart-webcomponents-angular/breadcrumb';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    CardModule,
    TabsModule,
    ButtonModule,
    CheckBoxModule,
    BreadcrumbModule,
    FormsModule,
    SharedModule,
    NgbModule,

  ]
})
export class PaymentModule { }
