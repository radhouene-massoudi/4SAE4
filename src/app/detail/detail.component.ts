import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
myid!:any;
  constructor(private s:ActivatedRoute, private ser:TestService) { }

  ngOnInit(): void {
this.myid=this.s.snapshot.params['id'];//send request to backend select * from product where id=this.my id
//console.log(this.myid);
this.ser.msg();
  }
  
}
