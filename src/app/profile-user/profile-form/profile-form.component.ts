import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from '../../shared/Model/User';
import {UserService} from '../../shared/Services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  userForm: FormGroup;

  user: Observable<User>;


  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.user = this.userService.getUser().valueChanges();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.user.subscribe(user => {
      this.userForm = this.formBuilder.group({
        First_name: '',
        Last_name: '',
        Birthdate: '',
        Address: '',
        Country: '',
        Bio: '',
        Organisation: '',
        Phone_number: '',
        Product_types: this.formBuilder.array([])
      });
      this.userForm.patchValue(user);
    });
  }

  onSubmitForm() {
    console.log('aaaa');
  }
}
