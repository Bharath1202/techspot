import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  public class = 0;
  public showElectronics = false;
  constructor() {}

  ngOnInit(): void {}
  toShow() {
    this.showElectronics = !this.showElectronics;
    if (this.class == 0) {
      this.class = 1;
    } else {
      this.class = 0;
    }
  }
  toggleSideBar() {}
}
