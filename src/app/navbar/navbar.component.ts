import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth-functions.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Uid:string='';
navbarSimple:boolean;
navbarProducer:boolean;
email:any='';
password:any='';
  constructor(public auth:AuthService) { 
   this.Uid=auth.currentUserId;
   if (this.Uid===''){
     this.navbarSimple=true;
     this.navbarProducer=false;
   }
   else{
     this.navbarSimple=false;
     this.navbarProducer=true;
   }
   console.log(this.navbarProducer +""+this.navbarSimple);
  }
login(email:any,password:any){
  console.log('emai='+this.email);
  this.auth.login(email,password);

}
  ngOnInit() {
  }

}
