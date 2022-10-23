import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Electronics } from '../../model/electronics';
import { ElectronicsService } from '../../service/electronics.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElectronicsComponent implements OnInit {

  public image: string;
  public buttonName = 'Save';
  public productEdit: Boolean = false;
  public id;
  public avatarImage: string = 'https://dummyimage.com/200x200/ccc/000';
  public electronics: Electronics = new Electronics();
  constructor(private fireStorage: AngularFireStorage, private router: Router, private electronicsService: ElectronicsService, private toastr: NgToastService, private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(res => {
      this.id = res['id'];
      if (res['id']) {
        this.buttonName = 'Update'
        this.getSingleProduct();
      }
    })
  }

  ngOnInit(): void {
  }
  upload(event) {
    this.image = event.target.files[0];
    this.fireStorage.upload("/electronics/mobile" + Math.random() + this.image, this.image);
  }

  removeImg() {
    this.avatarImage = 'https://dummyimage.com/200x200/ccc/000';

  }

  offer(event) {
    this.electronics.mobileOffer = Number(event.target.value);
  }

  saveElectronics(electronicsForm) {
    if (this.electronics._id) {
      this.electronicsService.updateElectronics(this.electronics).subscribe((res: any) => {
        this.toastr.success({ detail: "Success Message", summary: 'Update Successfully', duration: 2000 });
        electronicsForm.reset();
        this.router.navigateByUrl('/home/admin/electronicsList');
      }, (error) => {
        this.toastr.error({ detail: "Error Message", summary: error?.error?.message, duration: 2000 });
      })
    }
    else {
      this.electronicsService.saveElectronics(this.electronics).subscribe((res: any) => {
        this.toastr.success({ detail: "Success Message", summary: 'Save Successfully', duration: 2000 });
        electronicsForm.reset();
        this.router.navigateByUrl('/home/admin/electronicsList');
      }, (error) => {
        this.toastr.error({ detail: "Error Message", summary: error?.error?.message, duration: 2000 });
      })
    }
  }
  getSingleProduct() {
    this.electronicsService.getSingleElectronics(this.id).subscribe((res: any) => {
      this.electronics = res?.result;
    }, (error) => {
      console.log(error);
    })
  }
}
