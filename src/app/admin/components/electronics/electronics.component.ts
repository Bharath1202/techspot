import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
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

  public image: String;
  public buttonName = 'Save';
  public productEdit: Boolean = false;
  public avatarImage: string = 'https://dummyimage.com/200x200/ccc/000';
  public electronics: Electronics = new Electronics();
  constructor(private fireStorage: AngularFireStorage, private electronicsService: ElectronicsService, private toastr: NgToastService) { }

  ngOnInit(): void {
  }
  upload(event) {
    this.image = event.target.files[0]
    const file = this.image[0]
    this.fireStorage.upload("/files" + Math.random() + this.image, this.image[0]);

  }
  editProduct() {
    if (this.productEdit == false) {
      this.productEdit = true;
    } else {
      this.productEdit = false;
    }
  }
  saveElectronics() {
    this.electronicsService.saveElectronics(this.electronics).subscribe((res: any) => {
      console.log(res);
      this.toastr.success({ detail: "Success Message", summary: 'Login Successfully', duration: 2000 })
    }, (error) => {
      console.log(error);
    })
  }
}
