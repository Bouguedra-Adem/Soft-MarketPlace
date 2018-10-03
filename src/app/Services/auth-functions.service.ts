import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable()
export class AuthService {
  user: any=null;

  constructor(private firebaseAuth: AngularFireAuth,private db: AngularFireDatabase) {
    firebaseAuth.authState.subscribe(auth=>{
      this.user =auth;
    });
  }



  login(email: string, password: string) {
    console.log('Nice, it worked!');
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
  sendEmailVerification() {
    this.firebaseAuth.authState.subscribe(user => {
        user.sendEmailVerification()
       
        .then(() => {
          console.log('email sent');
        })
      });
  }
  register(email, password,data:any) {
    console.log("adem1");
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      this.sendEmailVerification()
      this.firebaseAuth.authState.subscribe(
        (auth) => {
          if (auth != null) {
            console.log(auth.uid);
           this.db.object(`/Users_dev/${auth.uid}`).set(data);
         

          }
        });
    })
    .catch((err)=> {
      //Do as you please here
    });
  } 
  sendPassword(email) {
    this.firebaseAuth.auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('email sent');
    })
  }
   // Returns true if user is logged in
   get authenticated(): boolean {
    return this.user !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.firebaseAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

}