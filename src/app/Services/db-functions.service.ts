import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DBFunctionsService {

  Projets;
  Panier;

  constructor(public DB: AngularFireDatabase) {
    const pub = this.DB.list<any>('pub').valueChanges();

    this.DB.list<any[]>('/Produit_details').valueChanges().subscribe(data => {
      this.Projets = data;
      console.log(this.Projets);
      console.log("adem");
    });
  }
}
