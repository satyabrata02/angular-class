import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  c = 0;
  @ViewChild(HeaderComponent) hc!: HeaderComponent;
  received() {
    this.c = this.hc.count;
  }
  val!: string;
  receive(str: string) {
    console.log(str);
    // this.val = str;
  }
}
