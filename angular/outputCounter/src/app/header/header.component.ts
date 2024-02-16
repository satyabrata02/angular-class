import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() satya= new EventEmitter();
  count = 0; 
  value!: string;
  send() {
    this.satya.emit(this.value);
  }
  incr() { this.count++; }
  decr() { this.count--; }
  reset() { this.count =0; }
}
