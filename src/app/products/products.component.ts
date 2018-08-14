import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pub :Observable <any[]>;
  users;
  constructor(public DB:AngularFireDatabase) {
    const pub=this.DB.list<any>('pub').valueChanges();
   
   this.DB.list<any[]>('/pub').valueChanges().subscribe(data => {
       this.users = data
       console.log(data);
     });
  }

  ngOnInit() {
  }

}
