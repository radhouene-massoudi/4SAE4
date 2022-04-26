import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnInit {
@Input()p!:any;
@Input()prixmax=0;
@Output() notif=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
sendDataToParent(p:any){
this.notif.emit(p)
}
}
