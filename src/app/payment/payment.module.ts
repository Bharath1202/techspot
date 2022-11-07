import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CardModule } from '@smart-webcomponents-angular/card';
import { TabsModule } from '@smart-webcomponents-angular/tabs';
import { ButtonModule } from '@smart-webcomponents-angular/button';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePayButtonModule } from "@google-pay/button-angular";

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
    FormsModule,
    SharedModule,
    NgbModule,
    GooglePayButtonModule
  ]
})
export class PaymentModule { }
