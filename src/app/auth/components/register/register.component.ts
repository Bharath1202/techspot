import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';
import { Register } from '../../model/register';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  public register: Register = new Register();
  constructor(
    private authService: AuthService,
    private toastr: NgToastService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveUser() {
    this.register.imageUrl = environment.imageUrl;
    this.authService.saveUser(this.register).subscribe(
      (res: any) => {
        this.toastr.success({
          detail: 'Success Message',
          summary: 'Register Successfully',
          duration: 2000,
        });
        this.router.navigateByUrl('/auth/login');
      },
      (error) => {
        this.toastr.error({
          detail: 'Error Message',
          summary: error.error.message,
          duration: 2000,
        });
      }
    );
  }
}
