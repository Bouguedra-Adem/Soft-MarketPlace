import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: AngularFireObject<User> = null;

  constructor(private af: AngularFireDatabase) {

  }

  getUser(): AngularFireObject<User> {
    if (this.user == null) {
      console.log('user is null');
      this.user = this.af.object('Users_dev/cqO9CGCMYlPUJ4eUpTdsoo7fIHJ3');
      /*this.user.valueChanges().subscribe(user => {
        this.getOrganisation(user.Organisation).subscribe(org => {
          user.Organisation = org.Name;
          console.log(user.Organisation);
        });
        return user;
      });*/
      return this.user;
    } else {
      console.log('user is not null');
      return this.user;
    }
  }

  private getOrganisation(org: string): Observable<any> {
    return this.af.object('Organisations/' + org).valueChanges();
  }
}
