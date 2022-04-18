import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private t: TestService) { }

  ngOnInit(): void {
    this.t.msg();
  }
sum(a:any,b:any){
  alert('bonjour')
}
}
