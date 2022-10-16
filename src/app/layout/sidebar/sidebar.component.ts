import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Menu, Menu1 } from 'src/app/menu/menu';
// import { MenuItem } from 'src/app/menu/menuItem';
import { TreeComponent } from '@smart-webcomponents-angular/tree';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  @ViewChild('tree', { read: TreeComponent, static: false }) tree: TreeComponent;
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
  truec() {

  }
}
