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
  count: number = 0;
  isDisabled = false;
  isDisabled2 = true;
  isItemStored = false;
  
  constructor(private route:ActivatedRoute, private as:ApiService){
    this.route.params.subscribe((data) => {
      this.id = data['id'];
      this.as.getProduct(this.id).subscribe((data:any) => this.product = data)
    })
  }

  incr() {
    if (this.count >= 10) {
      this.isDisabled=true;
    }else {
       this.count++;
       this.isDisabled2=false;
    }
  }
  decr() {
    if (this.count <= 0) {
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
    this.as.addValue(prod);
    this.isItemStored = true;
  }
}
