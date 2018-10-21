import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../../shared/Model/User';
import {Observable} from 'rxjs';
import {UserService} from '../../../shared/Services/user.service';
import { UserCons } from '../../../shared/Model/User_cons';
import { Organisation } from '../../../shared/Model/Organisation';
import { ClientListService } from '../../../shared/Services/client-list.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() user: UserCons;
  userEmail: string;
  userPic: string;
  organisation: Organisation;


  constructor(private clientListService: ClientListService) {
  }

  ngOnInit() {
    this.userPic = this.user.Photo;
    this.userEmail = 'fm_bouguesri@esi.dz';
    this.organisation = this.clientListService.getOrganisation(this.user.Organisation);
    console.log(this.user.Organisation, this.organisation);
  }

}
