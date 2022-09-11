import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  public counter = 0;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.subject.subscribe((res: any) => {
      this.counter = res;
    });
  }
}
