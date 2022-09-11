import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public data: any;
  public opened = true;
  constructor(private layoutService: LayoutService) {}
  ngOnInit(): void {
    this.layoutService.subject.subscribe((res) => {
      console.log(res);
      // if (res == 0) {
      //   this.number = false
      // }
      // else if (res == 1) {
      //   this.number = true
      // }
    });
  }
  btn() {
    this.layoutService.sendData(this.data);
  }
  buyNow() {
    this.layoutService.data(this.data);
  }
}
