import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  isDisabled = false;
  isDisabled2 = true;
  evenFlag = true;
  isEven ="Even";
  
  checkEvenOdd(){
    if (this.count % 2 == 1) { 
      this.isEven = "Odd"; 
      this.evenFlag = false; 
    }else { 
      this.isEven = "Even";
      this.evenFlag=true; 
    }
  }
  incr() {
    if (this.count >= 20) {
      this.isDisabled=true;
    }else {
       this.count++;
       this.isDisabled2=false;
    }
   this.checkEvenOdd();
  }
  decr() {
    if (this.count <= 0) {
      this.isDisabled2=true;
    }else {
       this.count--;
       this.isDisabled=false;
    }
    this.checkEvenOdd();
  }
  reset() { 
    this.count = 0; 
    this.isDisabled=false;
    this.isDisabled2=true;
    this.checkEvenOdd();
  }
}