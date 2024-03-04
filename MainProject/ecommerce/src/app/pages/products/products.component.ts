import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Products';
  products: any[] = [];
  categories: { [key: string]: any[] } = {};
  isDisabledRmv = true;
  c!: number;
  pageName = 'products';
  searchts!: string;

  constructor(private titleService: Title, private as:ApiService){
    this.as.searchTs.subscribe(searchTs => {
      this.searchts = searchTs;

      this.as.getFilterProduct(this.searchts).subscribe((data:any) => {
        this.products = data.products;
      })
    });

    this.as.getActivePage(this.pageName);
    this.as.cartSubObs.subscribe((data)=>this.c=data);

    titleService.setTitle(this.title);
    this.as.getProducts().subscribe((data:any) => {
      this.products = data.products;
      
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
    this.as.getCategoryProduct(e.target.textContent).subscribe((data:any) => (this.products = data.products));
  }

  
  addtocart(prod:Object){
    this.as.addValue(prod);
    this.isDisabledRmv = false;
  }
  removecart(prod:Object){
    if(this.c <= 0){
      this.isDisabledRmv = true;
    }else{
      this.as.removeValue(prod);
    }
  }
}
