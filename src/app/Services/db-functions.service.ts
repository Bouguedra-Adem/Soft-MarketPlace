import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/internal/observable/concat';
@Injectable({
  providedIn: 'root'
})
export class DBFunctionsService {
  Projet:any;
  Projets:any;
  Projets1:any;
   Dettail:any;
   Comment:any=[];
  Panier;
  key:any=[];
  constructor(public DB:AngularFireDatabase) {
   
    this.Projets1=this.DB.list('/Products/Brief');
     this.Projets1.snapshotChanges().subscribe(snapshots=> {
              
               for (let prj in snapshots){
  
               this.key[prj]=snapshots[prj].key;

               }
          });
          this.Projets1.valueChanges().subscribe(data=> {
           this.Projets=data;
          
           
       });
     
      
    
  }
getproduct(){
  this.Projets1=this.DB.list('/Products/Brief');
  this.Projets1.valueChanges().subscribe(data=> {
    this.Projets=data;
 });
}
getDettail( ){
   this.Projet=this.DB.object<any[]>(`/Products/Detail`);
   this.Projet.valueChanges().subscribe((data )=>{
   this.Dettail=data;
 }); 
 } 
 getComment(key:string ){
  console.log("adem");
  this.Projet=this.DB.list<any[]>(`/Comments_per_Product/${key}/`);
  console.log("adem");
  this.Projet.valueChanges().subscribe((data )=>{
  this.Comment=data;
  console.log(this.Comment);
  return 1
}); 
return 0;
} 
}
export interface Products{
key ?:string;
data:any;
}
