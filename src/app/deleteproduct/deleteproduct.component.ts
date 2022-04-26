import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
id!:any;
  constructor(private activateroute:ActivatedRoute,private s:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.activateroute.snapshot.params['id'];
    this.s.deleteProduct(this.id).subscribe(
      ()=>{
       this.router.navigate(['p'])
      },
      (error)=>{
        console.log(error)
      },
      ()=>{
        
      }
    );
    
  }

}
