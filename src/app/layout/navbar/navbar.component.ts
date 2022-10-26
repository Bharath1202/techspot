import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CartService } from 'src/app/mobiles/service/cart.service';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  public counter = 0;
  public loginType;
  public currentUser;
  constructor(private layoutService: LayoutService, private cartService: CartService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType');
    this.currentUser = JSON.parse(localStorage.getItem('userDetail'))
    this.layoutService.subject.subscribe((res: any) => {
      this.counter = res;
    });
    this.getAllCart();
  }
  logout() {
    this.authService.logout();
  }

  getAllCart() {
    this.cartService.getAllCart().subscribe((res: any) => {
      console.log('getAlll', res);
      this.counter = res?.result.length
    })
  }
  // switch(event) {
  //   console.log(event.target.value);

  //   const theme = event.target.value;
  //   document.getElementsByTagName('meta')[2].content = theme;
  // }
}
