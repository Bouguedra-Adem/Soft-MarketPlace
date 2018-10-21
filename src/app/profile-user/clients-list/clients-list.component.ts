import { Component, OnInit } from '@angular/core';
import { ClientListService } from '../../shared/Services/client-list.service';
import { UserCons, SocialLinks } from '../../shared/Model/User_cons';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: UserCons[] = [];

  constructor(private clientListService: ClientListService) { }

  ngOnInit() {
    const clientsKeys = this.clientListService.getClientsKeys();
    clientsKeys.subscribe((snapshot) => {
      this.clientListService.getClientInfo(snapshot).subscribe((client) => {
        this.clients.push(client);
      }, (error) => {
        console.log(error);
      });
    });
  }
}
