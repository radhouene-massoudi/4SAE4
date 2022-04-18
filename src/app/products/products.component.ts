import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product!:any;
  constructor(private s:ProductService) { }

  ngOnInit(): void {
    this.s.fecthProduct().subscribe(
      (d)=>{
        this.product=d;
        //console.log(d);
      }
    );
    
  
  }

}
