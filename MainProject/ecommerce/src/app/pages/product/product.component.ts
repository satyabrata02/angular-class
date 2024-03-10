import { Component, ElementRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id: any;
  product: any;
  fullImg: any;
  count: number = 1;
  isDisabled = false;
  isDisabled2 = true;
  isItemStored = false;
  productLength: any[] = [];
  
  constructor(private route:ActivatedRoute, private as:ApiService){
    this.route.params.subscribe((data) => {
      this.id = data['id'];
      this.as.getProduct(this.id).subscribe((data:any) => this.product = data)
    })

    const storedProducts = localStorage.getItem('myProducts');
    if (storedProducts) {
      this.productLength = JSON.parse(storedProducts);
    }
  }

  incr() {
    if (this.count >= 5) {
      this.isDisabled=true;
    }else {
       this.count++;
       this.isDisabled2=false;
    }
  }
  decr() {
    if (this.count <= 1) {
      this.isDisabled2=true;
    }else {
       this.count--;
       this.isDisabled=false;
    }
  }

  clicking(smallImg:any){
    console.log(smallImg.src);
    this.fullImg = document.querySelector('#imagebox');
    console.log(this.fullImg)
    this.fullImg.src = smallImg.src;
  }
  
  addtocart(prod:Object){
    const storedProducts = localStorage.getItem('myProducts');
    let productsArray: any[] = [];
    if (storedProducts) {
      productsArray = JSON.parse(storedProducts);
    }
    
    for (let i = 0; i < this.count; i++) {
      productsArray.push(prod);
    }

    const updatedProducts = JSON.stringify(productsArray);
    localStorage.setItem('myProducts', updatedProducts);

    this.productLength = productsArray;
    this.as.updateCartCount(this.productLength.length);
    console.log(this.productLength.length);
    this.isItemStored = true;
  }
}
