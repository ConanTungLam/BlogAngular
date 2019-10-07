import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface user {
  id: number,
  user: string,
  password: string,
  name: string,
  phone: string,
  email: string,
  address: string
}


const users: user[] = [
  {
    id: 1,
    user: 'account1',
    password: '123456',
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Ton Dan'
  },
  {
    id: 2,
    user: 'account1',
    password: '123456',
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Ton Dan'
  },
  {
    id: 3,
    user: 'account1',
    password: '123456',
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Ton Dan'
  },
  {
    id: 4,
    user: 'account1',
    password: '123456',
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Ton Dan'
  },
  {
    id: 5,
    user: 'account1',
    password: '123456',
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Ton Dan'
  }
]


@Injectable({
  providedIn:'root'
})

export class ManagerUserService {

  constructor() { }

  getUsersList(){
    return of(users)
  }

}
