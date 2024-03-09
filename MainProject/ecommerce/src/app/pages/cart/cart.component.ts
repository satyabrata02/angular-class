import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  title = 'Cart';
  constructor(private titleService: Title){ 
    titleService.setTitle(this.title);
    
    const storedProducts = localStorage.getItem('myProducts');
    let productsArray: any[] = [];
    if (storedProducts) {
      productsArray = JSON.parse(storedProducts);
    }
    console.log(productsArray);
    console.log(productsArray.length);
  }

}
