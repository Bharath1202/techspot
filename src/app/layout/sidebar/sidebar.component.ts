import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Menu, Menu1 } from 'src/app/layout/menu/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  public loginType;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  public class = 0;
  public adminMenu = Menu;
  public showSidebar = true;
  public userMenu = Menu1;
  public showElectronics = false;
  constructor() { }

  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')

  }
  toShow() {
    this.showElectronics = !this.showElectronics;
    if (this.class == 0) {
      this.class = 1;
    } else {
      this.class = 0;
    }
  }
  toggleSideBar() { }
}
