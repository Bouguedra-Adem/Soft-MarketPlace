import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {DBFunctionsService} from '../Services/db-functions.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  bool: boolean=true;
  Projets :any[];
  Projets1 :any[]=[];
  Projets2 :any[]=[];
  ProjetsAffich:any=[];
  Afficher:any="Afficher";
  cat1:any="ERP";
  checkbox: boolean= false;
  checkbox1: boolean= false;
  checkbox2: boolean= false;
  i:number=0;
  j:number=0;
  af:number=15;
/*******************************************************/
  constructor(serviceDB :DBFunctionsService) {
     this.Projets=serviceDB.Projets;
     this.Projets2=serviceDB.Projets; 
     this.Projets1=serviceDB.Projets;
  };
    
  
/*******************************************************/
FiltreCategorie(Filtre :any){
  this.Projets1=[];
    for (let prj in this.Projets){
        if(this.Projets[prj].CatégorieProjet===Filtre){
          this.Projets1.push(this.Projets[prj]);
          console.log(this.Projets1);
        }
   
  }
    this.Projets2=this.Projets1;
    
}
/******************************************************************/
FiltrePrix(PrixMin :any, PrixMax :any){
  this.Projets1=[];
  for (let prj in this.Projets){
      if(Number(this.Projets[prj].PrixProjet)>Number(PrixMin) && Number(this.Projets[prj].PrixProjet)<Number(PrixMax)){
        this.Projets1.push(this.Projets[prj]);
        console.log(this.Projets1);
      }
 
  }
  this.Projets2=this.Projets1;
  
}
/******************************************************************/
onCheckboxChange(){
  console.log("**************");
  console.log("check"+this.checkbox);
  console.log("chek1"+this.checkbox1);
  console.log("check2"+this.checkbox2);
  if (this.checkbox){

      this.checkbox1=false;
      this.checkbox2=false;
  }
 
  if (this.checkbox1){
      this.checkbox=false;
      this.checkbox2=false;
    }
    
    if (this.checkbox2){
   
        this.checkbox1=false;
        this.checkbox=false;
    
      
   }
      
} 
/********************************************************************** */
AllData(){
  this.Projets2=this.Projets;
  this.Projets1=this.Projets;
}
/***********************************************************************/
AfficherData(af:any){
  this.af=Number(af);
   this.i=0;
   this.Afficher="Afficher "+af;
   this.Projets2=this.Projets1; 
    for (let prj in this.Projets2){
        if (this.i<Number(af)){  
          this.ProjetsAffich.push(this.Projets2[prj]);
         
        }
        this.i++;
      }
   this.Projets2=this.ProjetsAffich;
   this.ProjetsAffich=[];
   
}
/********************************************************************** */
Next(){
  this.i=2*this.af;
  console.log(this.j+"   "+(this.i)+" "+this.af );
 
   for (let prj in this.Projets1){
    
       if ( this.j>=this.af && this.j<this.i){  
         this.ProjetsAffich.push(this.Projets1[prj]);
         console.log(this.j);
         console.log(this.Projets1[prj]);
       }
       this.j++;
      if (this.j===this.i){
        this.i=this.i+this.af;
      }
     }
  this.Projets2=this.ProjetsAffich;
  this.ProjetsAffich=[];
  
}

/*******************************************************************/
 ngOnInit() {
   
  }

}
interface Pub{
  CatégorieProjet: any;
  DescriptionDetail:any;
  DescriptionProjet:any;
  ImageProjet:any;
  PrixProjet:any;
  titreProjet:any;
  
}