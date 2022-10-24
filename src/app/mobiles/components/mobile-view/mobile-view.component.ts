import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/layout.service';
import { MobileService } from '../../service/mobile.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileViewComponent implements OnInit {

  public data: any;
  public id;
  public mobileList;
  constructor(private activatedRute: ActivatedRoute, private mobileService: MobileService, private layoutService: LayoutService) {
    this.activatedRute.queryParams.subscribe(res => {
      this.id = res['id']
      if (res['id']) {
        this.getSingleMobile();
      }
    })

  }

  ngOnInit() {

  }

  getSingleMobile() {
    this.mobileService.getSingleMobile(this.id).subscribe((res: any) => {
      this.mobileList = res?.result;
    }, (error) => {
      console.log(error);
    })
  }

  /*** Add to Cart */

  btn() {
    this.layoutService.sendData(this.data);
  }
  addToCart(id) {

    // this.layoutService.sendData(this.data);
  }
}
