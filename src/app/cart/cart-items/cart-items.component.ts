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
  total = 0;

  price;
  getAllCart() {
    this.cartService.getAllCart().subscribe((res: any) => {
      console.log('getAll', res);
      this.cartMobile = res?.result
      this.cartMobile.filter(res => {
        this.productList.push(res?.product);
        console.log('this.productList', this.productList);
        this.productLength = this.productList.length
      })
      let value = 0;
      this.cartMobile.forEach(res => {
        console.log('cart', res);
        value += Number(res?.product?.mobilePrice) * Number(res?.quantity);
        this.subTotal = value;
      })
    }, (error) => {
      console.log(error);
    })
  }

  subTotal = 0;
  increaseQuantity(data) {
    this.minus = false

    // quantity = this.increaseProduct++ + 1;
    // console.log(quantity);


    // console.log(details);
    var i = 1;
    this.cartService.updateCart(data, i);
    this.subTotal = (data?.mobilePrice * data?.quantity)
  }
  decreaseQuantity(data) {
    var i = 2;
    this.cartService.updateCart(data, i);
    // this.subTotal = (data?.mobilePrice - data?.quantity)

    // quantity = this.increaseProduct-- - 1;
    // if (quantity == 1 || quantity == 0) {
    //   this.minus = true
    // }
    // else {
    //   this.minus = false
  }
  // this.subTotal = (data?.mobilePrice * quantity)
}
// }
