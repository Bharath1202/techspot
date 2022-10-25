import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/mobiles/service/cart.service';
import { MobileService } from 'src/app/mobiles/service/mobile.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  public id;
  public cartMobile = [];
  public minus = true;
  public productList = [];
  public increaseProduct: number = 1;
  public productAmount;
  constructor(private activteRoute: ActivatedRoute, private cartService: CartService) {
    this.activteRoute.queryParams.subscribe(res => {
      this.id = res['id'];
    })
  }

  ngOnInit(): void {
    this.minus = false;
    this.getAllCart();
  }
  productLength;
  getAllCart() {
    this.cartService.getAllCart().subscribe((res: any) => {
      this.cartMobile = res?.result
      this.cartMobile.filter(res => {
        this.productList.push(res?.product);
        console.log('this.productList', this.productList.length);
        this.productLength = this.productList.length

        this.subTotal = res?.product?.mobilePrice
        console.log(this.subTotal);

      })
    }, (error) => {
      console.log(error);
    })
  }

  subTotal = 0;
  increaseQuantity(quantity, data) {
    this.minus = false
    quantity = this.increaseProduct++ + 1;
    console.log(quantity);
    this.subTotal = (data?.mobilePrice * quantity)
  }
  decreaseQuantity(quantity, data) {
    quantity = this.increaseProduct-- - 1;
    if (quantity == 1) {
      this.minus = true
    }
    else {
      this.minus = false
    }
    this.subTotal = (data?.mobilePrice * quantity)
  }
}
