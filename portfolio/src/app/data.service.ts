import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }

  getDataAll(){
    return this.hc.get('https://fakestoreapi.com/products');
  }
  getData(id:any){
    return this.hc.get(`https://fakestoreapi.com/products/${id}`);
  }
}
