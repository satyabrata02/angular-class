import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
[x: string]: any;
  title = 'Products';
  products: any[] = [];
  categories: { [key: string]: any[] } = {};

  constructor(private titleService: Title, private as:ApiService){ 
    titleService.setTitle(this.title);
    this.as.getProducts().subscribe((data:any) => {
      this.products = data.products;
      console.log(this.products);
      
      this.products.forEach((product: any) => {
        const category = product.category;
        if (this.categories[category]) {
          this.categories[category].push(product);
        } else {
          this.categories[category] = [product];
        }
      });
    });
  }

  showAll(){
    this.as.getProducts().subscribe((data:any) => {
      this.products = data.products;
    });
  }
  filterAll(e:any){
    console.log("hii")
    this.as.getCategoryProduct(e.target.textContent).subscribe((data:any) => (this.products = data.products));
  }
}
