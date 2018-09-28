import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/Services/user.service';
import {User} from '../shared/Model/User';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  userEmail: string;
  userPic: string;
  userNbrSales = 12;
  userNbrPostes = 30;

  user: Observable<User> ;


  constructor(private userService: UserService) {
    this.user = this.userService.getUser().valueChanges();
  }

  ngOnInit() {
    this.userEmail = 'fn_souab@esi.dz';
    this.userPic = 'https://bootdey.com/img/Content/avatar/avatar1.png';

  }


}
