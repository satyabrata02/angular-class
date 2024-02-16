import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'both-child-to-parent';
  value! : string;
  senddata! : string;
  receivevalue! : string;
  
  sendtochild(){
    this.senddata = this.value;
  }

  receive(rvalue: string) {
    this.receivevalue = rvalue;
  }
}
