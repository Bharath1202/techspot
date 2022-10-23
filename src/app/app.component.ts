import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Arredo';
  public opened = true;

  receive(event) {
    this.opened = !event
    console.log(event);

  }
}
