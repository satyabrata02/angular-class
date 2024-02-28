import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  c = 0;
  constructor(){
    console.log("constructor called")
  }
  incr(){
    this.c++;
  }
}
