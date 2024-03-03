import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc:HttpClient) { }

  getProducts(){
    return this.hc.get(`${API_URL}`);
  }
  getProduct(id:number){
    return this.hc.get(`${API_URL}/${id}`);
  }
  getCategoryProduct(cate:any){
    return this.hc.get(`${API_URL}/category/${cate}`);
  }
}
