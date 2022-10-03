import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../../service/mobile.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileViewComponent implements OnInit {
  public id;
  public mobileList;
  constructor(private activatedRute: ActivatedRoute, private mobileService: MobileService) {
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
      console.log(this.mobileList);
    }, (error) => {
      console.log(error);
    })
  }
}
