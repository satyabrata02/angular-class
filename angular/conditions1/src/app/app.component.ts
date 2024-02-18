import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "satya";
  isSatya = false;
  value!:number;
  fun(){
    if (this.isSatya) {
      this.isSatya = false;
      document.body.classList.remove('overlay');
    }
    else{
      this.isSatya = true
      document.body.classList.add('overlay');
    }
  }
}
