import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Services/auth-functions.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  Form_dev_1 : boolean=false;
  Form_dev_2 : boolean=false;
  Form_dev_3 : boolean=false;
  Form_dev_4 : boolean=false;
  private UserProfile:AuthDev;
  bool1:boolean=false;
  bool2:boolean=false;
  bool3:boolean=false;
  bool4:boolean=false;
  bool5:boolean=false;
  bool6:boolean=false;
  bool7:boolean=false;
  bool8:boolean=false;
  bool9:boolean=false;
  bool10:boolean=false;
  bool11:boolean=false;
  bool12:boolean=false;
  bool13:boolean=false;
  bool14:boolean=false;
  bool15:boolean=false;
  date =new Date();
  Date:String[]=[];
  CIB:boolean=false;
  CIB1:boolean=false;
  CDN:boolean=false;
  CDN1:boolean=false;
  CCP:boolean=false;
  CCP1:boolean=false;
  Email:string="";
  First_name:string="";
  Last_name:string="";
  Adr:string="";
 Phone_number:string="";
 Password:string="";
 ConfirmPassword:string="";
 Product_type:string="";
 Bio:string="";
 Technologies:string="";
 GithubLink:string="";
 LinkdenLink:string="";
 chosenMod:string="mod1";
 Account_number:string="";
 Birthdate:string="";
  constructor(public srv:AuthService) { 
    
   this.UserProfile={};
   this.UserProfile.Social_links={};
   this.UserProfile.Payment={};
  
    console.log(String(this.date.getDate())+"-"+String(this.date.getUTCMonth()-1)+"-"+String(this.date.getFullYear()) );
  }
   
  ngOnInit() {
  }
Next1(){
  
this.bool1=this.bool2=this.bool3=this.bool4=this.bool5=this.bool6=this.bool7=this.bool8=false;
if (this.Email===""){this.bool1=true;}
if (this.First_name===""){this.bool2=true;}
if (this.Last_name===""){this.bool3=true;}
if(this.Adr===""){this.bool4=true;}
if (this.Birthdate==="" ){this.bool5=true;}
if (this.Phone_number==="" ){this.bool6=true;}
if (this.chosenMod==="mod1" ){this.bool15=true;}
if (this.Password==="" || this.Password.length<6 ){this.bool7=true;}
if (this.ConfirmPassword!=this.Password){this.bool8=true;}
if (!this.bool15&&!this.bool1 && !this.bool2 && !this.bool3 && !this.bool4 && !this.bool5 && !this.bool6 && !this.bool7 && !this.bool8){
this.UserProfile.First_name=this.First_name;
this.UserProfile.Last_name=this.Last_name;
this.UserProfile.Address=this.Adr;
this.UserProfile.Borthdate=this.Birthdate;
this.UserProfile.Phone_number=this.Phone_number;
this.UserProfile.Country=this.chosenMod;
this.Form_dev_2=!this.Form_dev_2;
this.Form_dev_1=!this.Form_dev_1;

}
}
Next2(){
  
  
  this.bool9=this.bool10=this.bool11=this.bool12=this.bool13=false;
  if (this.Bio===""){this.bool9=true;}
  if (this.Technologies===""){this.bool11=true;}
  if (this.GithubLink===""){this.bool12=true;}
  if (this.LinkdenLink===""){this.bool13=true;}
  if(this.Product_type===""){this.bool10=true;}
  if (!this.bool9 && !this.bool10 && !this.bool12 &&  !this.bool11 && !this.bool13){
    this.UserProfile.Bio=this.Bio;
  this.UserProfile.Technologies= this.Technologies.split(",");
  console.log(  this.UserProfile.Technologies);
  this.UserProfile.Product_types=this.Product_type.split(",");
  this.UserProfile.Social_links.Github=this.GithubLink;
  this.UserProfile.Social_links.LinkedIn=this.LinkdenLink;
  this.Form_dev_3=!this.Form_dev_3;
  this.Form_dev_2=!this.Form_dev_2;
 
  }
}
checkboxCIB(){
this.CIB=true;
this.CIB1=false;
this.CCP=false;
this.CCP1=false;
}
checkboxCCP(){
  this.CIB=false;
  this.CIB1=false;
  this.CCP=true;
  this.CCP=false;
  }
  checkboxCDN(){
    this.CDN1=true;
    this.CDN=false;
  }  
Prev2(){
 
this.Form_dev_1=!this.Form_dev_1;
this.Form_dev_2=!this.Form_dev_2;
}
Submit(){
  this.CIB1=false;this.CCP1=false;
  this.bool14=false;
  this.CDN=false;
  if (this.CIB){this.UserProfile.Payment.Payment_type="CIB"}
  else{
    if (this.CCP){
     this.UserProfile.Payment.Payment_type="CCP";
    }
    else{this.CIB1=true;this.CCP1=true;}
}

if (this.Account_number===""){this.bool14=true;}
if ( !this.CDN1){this.CDN=true;}
if ((!this.CIB ||!this.CCP)&& !this.bool14 && this.CDN1){
 this.UserProfile.Signup_date = String(this.date.getDate())+"-"+String(this.date.getUTCMonth()+1)+"-"+String(this.date.getFullYear()) ;
 this.UserProfile.isValid=false; 
 this.UserProfile.Payment.Account_number=this.Account_number;
 this.UserProfile.Payment.Total_income="0";
 this.srv.register(this.Email,this.Password,this.UserProfile);
 this.Form_dev_1=false;
 this.Form_dev_2=false;
 this.Form_dev_3=false;
 this.Form_dev_4=true;

}
}
Prev3(){
this.Form_dev_2=!this.Form_dev_2;
this.Form_dev_3=!this.Form_dev_3;
}
AsDev(){
  this.Form_dev_1=true;
  this.Form_dev_2=false;
  this.Form_dev_3=false;
  this.Form_dev_4=false;
  this.chosenMod='mod1';
  this.bool1=this.bool2=this.bool3=this.bool4=this.bool5=this.bool6=this.bool7=this.bool8=this.bool9=this.bool10=this.bool11=this.bool12=this.bool13=this.bool14=this.bool15=false;
  this.UserProfile={};
  this.UserProfile.Social_links={};
  this.UserProfile.Payment={};
  this.Account_number=this.Adr=this.Bio=this.Birthdate=this.First_name=this.Last_name=this.GithubLink=this.LinkdenLink=this.Password=this.ConfirmPassword=this.Product_type=this.Phone_number=this.Technologies=this.Email="";
  this.CIB=this.CIB1=this.CCP=this.CCP1=this.CDN=this.CDN1=false;
}

}
export interface AuthDev{
 
  First_name?:string,
  Last_name?:string,
  Address?:string,
  Country?:string,
  Borthdate?:string,
  Phone_number?:string,
  Photo?:string,
  Organisation?:string,
  isValid?:boolean,
  Technologies?:any,
  Signup_date?:string,
  Product_types?:any,
  Payment?:payment,
  Social_links?:social_links,
  Bio?:string,
  Birthdate?:string
}
export interface  payment{
  Account_number?:string,
  Payment_type?:string,
  Total_income?:string 
}
export interface social_links{
  Github?:string,
  LinkedIn?:string
}