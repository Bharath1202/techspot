import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/mobiles/service/mobile.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  public id;
  public cartMobile;
  public increaseProduct: number = 1;
  public productAmount;
  constructor(private activteRoute: ActivatedRoute, private mobileService: MobileService) {
    this.activteRoute.queryParams.subscribe(res => {
      this.id = res['id'];
      if (res['id']) {
        this.getSingleCartMobile();
      }
    })
  }

  ngOnInit(): void {
  }

  getSingleCartMobile() {
    this.mobileService.getSingleMobile(this.id).subscribe((res: any) => {
      console.log('mobile', res);
      this.cartMobile = res?.result;
    }, (error) => {
      console.log(error);
    })
  }
}
