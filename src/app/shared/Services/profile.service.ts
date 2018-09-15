import {Injectable} from "@angular/core";
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  Datas: any;
  Data:any;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getProfileListData(): AngularFireList<any[]> {
    if (!this.userId) return;
    this.Datas = this.db.list<any[]>('/Profile/'+this.userId).valueChanges().subscribe(Data=>{
      this.Data=Data;
    }

    );
    return this.Data;
  }


  AjoutePanier(Data: any)  {
    this.Datas.push(Data);
  }

}
