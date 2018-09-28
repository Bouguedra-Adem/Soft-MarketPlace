import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../shared/Model/User';
import {UserService} from '../../shared/Services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: Observable<User>;


  constructor(private userService: UserService) {
    this.user = this.userService.getUser().valueChanges();
    this.user.subscribe(user => console.log(user.Technologies));
  }

  ngOnInit() {
  }

}
