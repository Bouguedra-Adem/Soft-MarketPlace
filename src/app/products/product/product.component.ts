import { Component, OnInit,Input } from '@angular/core';
;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() Projets;
  tab=new Array(12);
  constructor() { }

  ngOnInit() {
  }

}
