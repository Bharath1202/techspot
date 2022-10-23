import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
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
  constructor(private layoutService: LayoutService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType');
    this.currentUser = JSON.parse(localStorage.getItem('userDetail'))
    this.layoutService.subject.subscribe((res: any) => {
      this.counter = res;
    });
  }
  logout() {
    this.authService.logout();
  }
}
