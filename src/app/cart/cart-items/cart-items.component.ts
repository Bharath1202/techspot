import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/layout.service';
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
  constructor(private activteRoute: ActivatedRoute, private cartService: CartService, private layoutService: LayoutService) {
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
  cartId = []
  getAllCart() {
    this.cartService.getAllCart().subscribe((res: any) => {
      console.log('getAll', res);
      this.cartMobile = res?.result
      this.cartMobile.filter(res => {
        this.productList.push(res?.product);
        this.productLength = this.productList.length
      })
      let value = 0;
      this.cartMobile.forEach(res => {
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
    var i = 1;
    console.log(data);

    // let details = {
    //   _id: data
    // }
    // this.cartService.getSingleCart(details).subscribe((res: any) => {
    //   console.log('getSingle', res);
    // })
    // this.cartService.updateCart(data, i).subscribe((res: any) => {
    //   console.log(res);
    // });;
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
  // this.subTotal = (data?.mobilePrice * quantity)

  deleteItem(i) {
    console.log(i);

    console.log(this.productList);
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList.indexOf(this.productList[i]) === i) {
        this.productList.splice(i, 1);
        break;
      }
    }
    // this.cartMobile.slice(i, 1)
  }
}
