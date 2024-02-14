import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() img!: string;
  @Input() title!: string;
  count: number = 0;
  isDisabled = false;
  isDisabled2 = true;
  isOrdered = false;
  incr() {
    if (this.count >= 10) {
      this.isDisabled=true;
    }else {
       this.count++;
       this.isDisabled2=false;
       this.isOrdered = false;
    }
  }
  decr() {
    if (this.count <= 0) {
      this.isDisabled2=true;
    }else {
       this.count--;
       this.isDisabled=false;
       this.isOrdered = false;
    }
  }
  order(){
    if(this.count == 0) {
      alert('Please add at least one item to the list.');
    }else{
      alert(`You are successfully ordered. \n ${this.count} items of ${this.title}`);
      this.isOrdered = true;
    }
  }
}
