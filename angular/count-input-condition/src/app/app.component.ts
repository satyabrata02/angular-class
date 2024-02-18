import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  count : number = 0;
  isDisabled = false;
  isDisabled2 = true;
  isOrdered = false;

  value! : string;
  senddata! : string;
  receivevalue! : string;

  value3 : any = "";
  isVowel: string = "Not Found(404)";
  
  click1(){
    const clickbtn1 = document.getElementById('click1');
    if (clickbtn1) {
      clickbtn1.classList.add('active');
    }
  }
  close1(){
    const clickbtn1 = document.getElementById('click1');
    if (clickbtn1) {
      clickbtn1.classList.remove('active');
    }
  }
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
      alert(`You are successfully ordered. \n ${this.count} items`);
      this.isOrdered = true;
    }
  }

  click2(){
    const clickbtn2 = document.getElementById('click2');
    if (clickbtn2) {
      clickbtn2.classList.add('active');
    }
  }
  close2(){
    const clickbtn2 = document.getElementById('click2');
    if (clickbtn2) {
      clickbtn2.classList.remove('active');
    }
  }
  sendtochild(){
    this.senddata = this.value;
  }
  receive(rvalue: string) {
    this.receivevalue = rvalue;
  }
  
  click3(){
    const clickbtn3 = document.getElementById('click3');
    if (clickbtn3) {
      clickbtn3.classList.add('active');
    }
  }
  close3(){
    const clickbtn3 = document.getElementById('click3');
    if (clickbtn3) {
      clickbtn3.classList.remove('active');
    }
  }
  check(){
    if(this.value3 == ''){
      this.isVowel = 'Not Found(404)';
    }else if(this.value3 <= 0 || this.value3 > 7){
      this.isVowel = 'Digit only 1 to 7';
    }else if (this.value3.length === 1) {
      switch (this.value3.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          this.isVowel = 'vowel';
          break;
        default:
          this.isVowel = 'consonant';
      }
    }else{
      this.isVowel = 'Not Found(404)';
    }
  }
}
