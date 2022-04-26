import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id!:any;
product!:any;
  constructor(private ac:ActivatedRoute, private ser: ProductService) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.ser.getProductByID(this.id).subscribe(
      (d)=>{
this.product=d;
      }
    );
  }
save(f:any){
  this.ser.updateProduct(f,this.id).subscribe(
    ()=>{
      alert('good');
    }
  );
}
}
