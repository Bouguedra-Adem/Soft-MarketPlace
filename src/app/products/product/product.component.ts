import { Component, OnInit,Input } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';
;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() Projets;
  tab=new Array(0) ;
  max:Number=2;
  constructor() {
    
   }
 Calcule_rating(data :any){
 
    for (let i ;i<5;i++){
        if ( Number(data.i ) >this.max ){
            this.tab=new Array(i);
        }
    }
    console.log(this.max)
 
 }
  ngOnInit() {
  }

}
