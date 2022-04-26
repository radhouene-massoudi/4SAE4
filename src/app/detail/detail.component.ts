import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
myid!:any;
product!:any;
  constructor(private s:ActivatedRoute, private ser:ProductService) { }

  ngOnInit(): void {
this.myid=this.s.snapshot.params['id'];//send request to backend select * from product where id=this.my id
this.ser.getProductByID(this.myid).subscribe(
  (d)=>{
this.product=d;
  }
);
  }
  
}
