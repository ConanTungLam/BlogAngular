import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface user {
  id: number,
  name: string,
  sex: boolean,
  age: number,
  address: string,
  position: string
}


const users: user[] = [
  {
    id: 1,
    name: 'Tran Van A',
    sex: true,
    age: 22,
    address: '12 Hoang Hoa Tham 0',
    position: 'Admin'
  },
  {
    id: 2,
    name: 'Tran Van A0',
    sex: true,
    age: 22,
    address: '12 Hoang Hoa Tham 1',
    position: 'Mod'
  },
  {
    id: 3,
    name: 'Tran Van A1',
    sex: true,
    age: 22,
    address: '12 Hoang Hoa Tham 2',
    position: 'Mod'
  },
  {
    id: 4,
    name: 'Tran Van A2',
    sex: true,
    age: 22,
    address: '12 Hoang Hoa Tham 3',
    position: 'User'
  },
  {
    id: 5,
    name: 'Tran Van A3',
    sex: true,
    age: 22,
    address: '12 Hoang Hoa Tham 4',
    position: 'User'
  }
]


@Injectable({
  providedIn:'root'
})

export class ManagerService {

  constructor() { }

  getUsersList(){
    return of(users)
  }

}
