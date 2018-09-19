import { Component, OnInit,Input } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';
import {Router, NavigationExtras} from "@angular/router";
import {DataService} from '../../Services/data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() Projets;
  @Input() Detail=[];
  @Input() Key;
  data :any;

  tab=new Array(0) ;
  max:Number=2;
  constructor(private router: Router, private Data:DataService) {
    
   }
 
 public onTap(data:any) {
  
  for(let prj in this.Projets){
    if (this.Projets[prj]===data){
      this.Data.detail= this.Detail[this.Key[prj]];
      this.Data.key=this.Key[prj];
     
    }
  }
  this.Data.projet=data;
 
  this.router.navigate(["/ProductDetaill"]);
}

  ngOnInit() {
  }

}
