import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  fecthProduct(){
  return  this.http.get('http://localhost:3000/product');
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/product/'+id)
  }
}
