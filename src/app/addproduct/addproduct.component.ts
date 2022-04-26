import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private s:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  save(f:any){
    this.s.addProduct(f).subscribe(
    ()=>{
      //alert('good');
      this.router.navigate(['p']);
    }
    );
  }

}
