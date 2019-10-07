import { Component, OnInit } from '@angular/core';
import { ManagerUserService, user } from 'src/app/service/manager-user.service';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  listUsers: user[];
  constructor(
    private managerUserService: ManagerUserService
  ) { }

  ngOnInit() {
    this.getUsersListCMP();
  }
  getUsersListCMP(){
    this.managerUserService.getUsersList().subscribe(data =>{
      this.listUsers = data;
    })
  }
}
