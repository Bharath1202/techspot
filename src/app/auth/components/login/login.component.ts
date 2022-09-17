import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')
  }
  submit() {
    this.authService.postlogin(this.login).subscribe((res: any) => {
      if (this.loginType == 'admin') {
        this.router.navigateByUrl('/home/dashboard');
      } else {
        this.router.navigateByUrl('/home/mobiles/mobileList');
      }
    }, (error) => {
      console.log(error);
    })
  }
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
