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
  public login: Login = new Login();
  constructor(private router: Router,private authService:AuthService) {}

  ngOnInit(): void {}
  submit() {
    // this.authService.postlogin(this.login).subscribe((res:any)=>{
    //   console.log(res);
    // },(error)=>{
    //   console.log(error);
    // })
    this.router.navigateByUrl('/home/dashboard');
  }
}
