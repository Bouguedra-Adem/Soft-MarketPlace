import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class DBFunctionsService {


  constructor(public DB: AngularFireDatabase) {
  }


}
