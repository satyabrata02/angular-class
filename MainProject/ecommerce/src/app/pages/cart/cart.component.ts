import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  title = 'Cart';
  productLength: any[] = [];

  constructor(private titleService: Title, private as:ApiService){ 
    titleService.setTitle(this.title);
    
    const storedProducts = localStorage.getItem('myProducts');
    if (storedProducts) {
      this.productLength = JSON.parse(storedProducts);
    }
    console.log(this.productLength);
  }

  incr(item: any) {
    if (item.count >= 10) {
      item.isDisabled=true;
    }else {
      item.count++;
      item.isDisabled2=false;
    }
    this.saveToLocalStorage();
  }

  decr(item: any) {
    if (item.count <= 1) {
      item.isDisabled2=true;
    }else {
      item.count--;
      item.isDisabled=false;
    }
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem('myProducts', JSON.stringify(this.productLength));
}

  calculateTotalPrice(item: any): number {
    return item.price * item.count;
  }
  TotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.productLength) {
        totalPrice += item.price * item.count;
    }
    return totalPrice;
}

  removecart(id:number){
    const index = this.productLength.findIndex((item: any) => {
      return item.id === id;
    });

    if (index !== -1) {
      this.productLength.splice(index, 1);
      const updatedProducts = JSON.stringify(this.productLength);
      localStorage.setItem('myProducts', updatedProducts);
      
      this.as.updateCartCount(this.productLength.length);
      console.log(this.productLength.length);
    } else {
        console.log("Item not found in Cart.");
    }
  }
}
