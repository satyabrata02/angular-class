import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environments';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  emptyproduct:any[]=[];
  private cartSubject = new BehaviorSubject(0);
  cartSubObs = this.cartSubject.asObservable();
  private cartItemsSubject = new BehaviorSubject(this.emptyproduct);
  cartItemsSubObs = this.cartSubject.asObservable();
  private pageNameSource = new BehaviorSubject<string>('');
  currentPageName = this.pageNameSource.asObservable();
  private searchText = new BehaviorSubject<string>('');
  searchTs = this.searchText.asObservable();

  constructor(private hc:HttpClient) { }

  getActivePage(pagename: string){
    this.pageNameSource.next(pagename);
  }
  sendSearchValue(searchString: string){
    this.searchText.next(searchString);
  }
  getProducts(){
    return this.hc.get(`${API_URL}`);
  }
  getProduct(id:number){
    return this.hc.get(`${API_URL}/${id}`);
  }
  getCategoryProduct(cate:any){
    return this.hc.get(`${API_URL}/category/${cate}`);
  }
  getFilterProduct(name:any){
    return this.hc.get(`${API_URL}/search?q=${name}`);
  }

  addValue(prod:Object) {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c + 1);
    // console.log(this.cartSubject.getValue());
    const items = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([ ...items, prod ]);
    // console.log(this.cartItemsSubject.getValue())
  }
  getCount() {
    return this.cartSubject.getValue();
  }
  getItems(){
    return this.cartItemsSubject.getValue();
  }
  removeValue(prod:Object) {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c - 1);
  }
}
