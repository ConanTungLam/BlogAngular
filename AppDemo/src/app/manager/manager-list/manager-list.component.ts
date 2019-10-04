import { Component, OnInit } from '@angular/core';
import { ManagerService, user } from 'src/app/service/manager.service';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  listUsers: user[];
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.getUsersListCMP();
  }
  getUsersListCMP(){
    this.managerService.getUsersList().subscribe(data =>{
      this.listUsers = data;
    })
  }
}
