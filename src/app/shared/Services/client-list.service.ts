import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserCons, SocialLinks } from '../Model/User_cons';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { element } from '@angular/core/src/render3/instructions';
import { Organisation } from '../Model/Organisation';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  constructor(public db: AngularFireDatabase) { }

  getClientsKeys(): Observable<string> {

    const userCons_keys = Observable.create((observer: Observer<string>) => {
      let Users_cons_per_Users_dev: AngularFireList<any[]>;
      Users_cons_per_Users_dev = this.db.list('/Users_dev_readable/Users_cons_per_Users_dev/cqO9CGCMYlPUJ4eUpTdsoo7fIHJ3');
      Users_cons_per_Users_dev.snapshotChanges().subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          observer.next(snapshot.key);
        });
      });
    });
    return userCons_keys;
  }

  getClientInfo(key: string): Observable<UserCons> {
    const client = Observable.create((observer: Observer<UserCons>) => {
      let Users_cons: AngularFireObject<any>;
      Users_cons = this.db.object(`/Users_cons_owned/Users_cons/${key}`);
      Users_cons.valueChanges().subscribe(snapshot => {
        if (snapshot != null) {
          observer.next(new UserCons(
            snapshot.First_name,
            snapshot.Last_name,
            snapshot.Birthdate,
            snapshot.Address,
            snapshot.Country,
            snapshot.Bio,
            snapshot.Organisation,
            snapshot.Phone_number,
            snapshot.Photo,
            snapshot.Position,
            snapshot.isValid,
            snapshot.Signup_date,
            snapshot.Notifications,
            new SocialLinks(null, snapshot.Social_links.LinkedIn))
          );
        } else {
          observer.error('Client ID doesn\'t exist');
        }
      }, (error) => {
          throw error;
      });
    });
    return client;
  }

  getOrganisation(key: string): Observable<Organisation> {
    return Observable.create((observer: Observer<Organisation>) => {
      const Users_cons: AngularFireObject<any> = this.db.object(`/Organisations/${key}`);
      Users_cons.valueChanges().subscribe(snapshot => {
        if (snapshot != null) {
          observer.next(snapshot);
        } else {
          observer.error('Organisation ID doesn\'t exist');
        }
      }, (error) => {
          throw error;
      });
    });
  }
}
