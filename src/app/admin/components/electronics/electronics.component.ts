import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElectronicsComponent implements OnInit {

  public image: String;
  public productEdit: Boolean = false;
  public avatarImage: string = 'https://dummyimage.com/200x200/ccc/000';
  constructor(private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  upload(event) {
    this.image = event.target.files[0]
    console.log(this.image);
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
}
