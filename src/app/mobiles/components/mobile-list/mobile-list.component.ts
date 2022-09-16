import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MobileService } from '../../service/mobile.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileListComponent implements OnInit {
  public mobileList;
  constructor(private mobileService: MobileService) { }

  ngOnInit(): void {
    this.getAllMobile();
  }

  getAllMobile() {
    this.mobileService.getAllMobile().subscribe((res: any) => {
      this.mobileList = res?.result
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }
}
