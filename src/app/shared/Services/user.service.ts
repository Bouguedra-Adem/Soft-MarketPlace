import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private af: AngularFireDatabase) {
  }

  getUser(key: string): Observable<any> {
    return this.af.object('Users_dev/' + key).valueChanges();
  }
}
