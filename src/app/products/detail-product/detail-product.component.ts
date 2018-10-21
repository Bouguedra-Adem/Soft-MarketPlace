import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DBFunctionsService} from '../../shared/Services/db-functions.service';
import {DataService} from '../../Services/data.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
lien:string="../../assets/B.jpg";
hide:boolean=false;  
hide2:boolean=true;  
projet:any;
title:any;
detail:any;
key:any;
Tags:any[]=[];
Technologies:any[]=[]
Ctn :any[]=[];
note:number;
rat1:number;
rat2:number;
rat3:number;
rat4:number;
rat5:number;
totalRat:number;
public constructor(private data: DataService,private DB:DBFunctionsService) {

  this.projet=this.data.projet;
  this.detail=this.data.detail;
  this.title=this.projet.Name;
  this.key=this.data.key;
   for(let prj in this.detail.Tags) {this.Tags.push(prj)}
   for(let prj in this.detail.Technologies) {this.Technologies.push(prj)}
   
  
  
 /*this.totalRat=Number(this.projet.Rating[1])+Number(this.projet.Rating[2])+Number(this.projet.Rating[3])+Number(this.projet.Rating[4])+Number(this.projet.Rating[5]);
 this.rat1=Number(this.projet.Rating[1]);
 this.rat2=Number(this.projet.Rating[2]);
 this.rat3=Number(this.projet.Rating[3]);
 this.rat4=Number(this.projet.Rating[4]);
 this.rat5=Number(this.projet.Rating[5]);
 this.note=this.bestRating(this.projet.Rating);
console.log("ademm"+this.rat1 ,this.rat2);*/
}
/************************************************** */
GetLenght(Data :any[]){
  let i =0;
  for (let j in Data){ i++;}
  return i;
 }
/********************************************** */
Hide(){
 this.hide=true;
 this.hide2=false;

this.DB.getComment(this.key);
setTimeout(()=>{
this.Ctn=this.DB.Comment;
console.log(this.DB.Comment);
}, 1200);


 

}
/************************************************************ */
Hide2(){
  this.hide=false;
  this.hide2=true;
 
 }
/************************************************************ */
bestRating(Data : any []){
 if (this.RatingMax(Data,1)){
 console.log("*************************** end bestrating"); 
  return 1;

 }else if(this.RatingMax(Data,2)){
   console.log("*************************** end bestrating"); 
  return 2;
 }
 else if(this.RatingMax(Data,3)){
   console.log("*************************** end bestrating"); 
   return 3;
 }
 else if(this.RatingMax(Data,4)){
   console.log("*************************** end bestrating"); 
   return 4;
 }
 else if(this.RatingMax(Data,5)){
   console.log("*************************** end bestrating"); 
   return 5;
 }
}
/****************************************************************/
RatingMax(Data:any [],Pos :number){
 let val=0;
 console.log("Data=",Data);
 for (let i in Data){
   console.log("For");
   if (Number(i)===Pos){
     console.log("if 1");
      val=Number(Data[i]);
   }
 }
 for (let k in Data){
   if (Number(Data[k])>val){
     console.log("if 2");
     return false;
   }
 }
return true;
} 

  ngOnInit() {
    
  }
 

}
