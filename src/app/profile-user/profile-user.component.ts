import {Component, OnInit} from '@angular/core';
import {DBFunctionsService} from '../shared/Services/db-functions.service';
import * as firebase from 'firebase';
import {UserService} from '../shared/Services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  userFirstName: string;
  userLastName: string;
  userName: string;
  userEmail: string;
  userPic: string;
  userNbrSales = 12;
  userNbrLikes = 123;
  userNbrPostes = 30;
  userNbrComments = 47;


  constructor(private userService: UserService) {
    this.userFirstName = 'Nadjib';
    this.userLastName = 'Souab';
    this.userName = this.userFirstName + this.userLastName;
    this.userEmail = 'fn_souab@esi.dz';
    this.userPic = 'https://bootdey.com/img/Content/avatar/avatar1.png';

  }

  ngOnInit() {

    this.userService.getUser('-LLzTO825sXz7fsSdjpO').subscribe(console.log);

  }


}
