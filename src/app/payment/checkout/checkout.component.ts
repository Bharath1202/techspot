import { Component, OnInit } from '@angular/core';
import { Country, State } from 'src/app/shared/country';
import { Payment, PaymentAddress, PaymentMethod } from '../model/payment';
import Stepper from 'bs-stepper'
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/mobiles/service/mobile.service';
import { CartService } from 'src/app/mobiles/service/cart.service';
import { PaymentService } from '../service/payment.service';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public payment: Payment = new Payment();
  public paymentMethod: PaymentMethod = new PaymentMethod();
  public paymentAddress: PaymentAddress = new PaymentAddress();
  public country = Country;
  public state = State;
  public minus = true;
  public bsStepper;
  private horizontalWizardStepper: Stepper;
  public expiryDate: NgbDateStruct
  public id;
  public mobile;
  constructor(private activateRoute: ActivatedRoute, private modalService: NgbModal, private toastr: NgToastService, private paymentService: PaymentService, private mobileService: MobileService, private cartService: CartService) {
    this.activateRoute.queryParams.subscribe(res => {
      this.id = res['id']
      if (res['id']) {
        this.getSingleMobile();
      }
    })
  }

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  onLoadPaymentData(event) {
    console.log("load payment data", event.detail);
  }
  ngOnInit(): void {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
    });
    this.bsStepper = document.querySelectorAll('.bs-stepper'), {};
  }

  placeOrder(PaymentMethodOption) {
    this.modalService.open(PaymentMethodOption, {
      centered: true
    })
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // this.paymentAddress = JSON.parse(localStorage.getItem('userAddress'))
  }
  getSingleMobile() {
    this.mobileService.getSingleMobile(this.id).subscribe((res: any) => {
      this.mobile = res?.result;
    }, (error) => {
      console.log(error);
    })
  }

  horizontalWizardStepperNext(data, status) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }

  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }


  paymentId;
  /*** payment Address */
  savPayment() {
    console.log('payments', this.payment);
    this.payment.paymentAddress = this.paymentAddress;
    // this.payment.paymentMethod = this.paymentMethod;
    this.paymentService.savePayment(this.payment).subscribe((res: any) => {
      console.log(res);
      this.toastr.error({ detail: "Success Message", summary: 'Save Successfully', duration: 2000 })
      this.paymentId = res?.result?._id;
      this.getSingleAddress();
    }, (error) => {
      console.log(error);
      this.toastr.error({ detail: "Error Message", summary: error, duration: 2000 })
    })
  }

  updatePayment() {
    if (this.expiryDate) {
      let date = new Date(this.expiryDate.year, this.expiryDate.month, this.expiryDate.day)
      this.paymentMethod.expiryDate = date
    }
    this.payment.paymentMethod = this.paymentMethod;
    this.paymentService.updatePayment(this.payment).subscribe((res: any) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }
  getSingleAddress() {
    this.paymentService.getSingleAddress(this.paymentId).subscribe((res: any) => {
      localStorage.setItem('userAddress', JSON.stringify(res?.result?.paymentAddress))
    }, (error) => {
      console.log(error);
    })
  }
  value;
  cardNumber() {
    var value = this.paymentMethod.cardNumber.split("-").join("");
    if (value.length > 0) {
      value = value.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    this.paymentMethod.cardNumber = value
  }

  increaseQuantity(data) {
    this.minus = false
    var i = 1;
    console.log(data);

    // let details = {
    //   _id: data
    // }
    // this.cartService.getSingleCart(details).subscribe((res: any) => {
    //   console.log('getSingle', res);
    // })
    this.cartService.updateCart(data, i).subscribe((res: any) => {
      console.log(res);
    });;
    // this.subTotal = (data?.mobilePrice * data?.quantity)
  }
  decreaseQuantity(data) {
    var i = 2;
    this.cartService.updateCart(data, i).subscribe((res: any) => {
      console.log(res);
    });
    // this.subTotal = (data?.mobilePrice - data?.quantity)

    // quantity = this.increaseProduct-- - 1;
    // if (quantity == 1 || quantity == 0) {
    //   this.minus = true
    // }
    // else {
    //   this.minus = false
  }
}