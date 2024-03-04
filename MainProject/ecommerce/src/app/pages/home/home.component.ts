import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'S-Mart';
  
  constructor(private titleService: Title){ 
    titleService.setTitle(this.title);
  }
}
