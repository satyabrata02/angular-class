import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // val: any;
  // x:any;
  
  // fun(){
  //   const el = document.getElementById('name') as HTMLInputElement;
  //   this.val = el.value.toUpperCase();
  //   alert(this.val);
  // }


  name: string="";
  email!: string;
  pass!: string;
  show(){
    alert(`successfully submitted \n ${this.name} \n ${this.email} \n ${this.pass}`)
  }
}
