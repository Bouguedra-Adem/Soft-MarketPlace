import { Component, OnInit,Input } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
@Component({
  selector: 'app-slide-img',
  templateUrl: './slide-img.component.html',
  styleUrls: ['./slide-img.component.css']
})
export class SlideImgComponent implements OnInit {
@Input () lien:any;
@Input () title:any;
@Input () Note:any;
bool:boolean=false;
bool1:boolean=true;
  constructor(private router: Router) {console.log(this.title,this.title,this.title) }
  public onTap() {
    
    
    this.router.navigate(["/Account"]);
  }
  
  ngOnInit() {
  }

}
