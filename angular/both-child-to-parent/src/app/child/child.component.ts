import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() sdata!: string;
  @Output() satya= new EventEmitter();
  value!: string;
  sendtoparent(){
    this.satya.emit(this.value);
  }
}
