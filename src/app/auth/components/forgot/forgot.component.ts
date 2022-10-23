import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forgot, Mobile } from '../../model/forgot';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  public showMobileForm = true;
  public mobile: Mobile = new Mobile();
  public forgotForm: Forgot = new Forgot();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  sendtoMobile() {
    if (this.showMobileForm == true) {
      this.showMobileForm = false;
    }
  }
  forgotPassword() {
    this.router.navigateByUrl('/auth/login');
  }
}
