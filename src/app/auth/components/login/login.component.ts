import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Login } from '../../model/login';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  public loginType;
  public passwordTextType: boolean;
  public submitted = false;
  public login: Login = new Login();
  constructor(private router: Router, private authService: AuthService, private toastr: NgToastService) { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')
  }
  submit() {
    this.authService.postlogin(this.login).subscribe((res: any) => {
      console.log(res);

      if (res?.result?.loginType === 'admin') {
        this.toastr.success({ detail: "Success Message", summary: 'Login Successfully', duration: 2000 })
        this.router.navigateByUrl('/home/admin')
      } else if (res?.result?.loginType === 'user') {
        this.toastr.success({ detail: "Success Message", summary: 'Login Successfully', duration: 2000 })
        this.router.navigateByUrl('/home/mobiles');
      }
      else {
        this.toastr.error({ detail: "Error Message", summary: 'User Is not Registered', duration: 2000 })
      }
    }, (error) => {
      this.toastr.error({ detail: "Error Message", summary: error.error.message, duration: 2000 })
    })
  }
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
