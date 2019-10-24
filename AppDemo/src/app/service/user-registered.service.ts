import { Injectable, Input } from '@angular/core';
import { of, Observable } from 'rxjs';


export interface User {
id: number,
user: string,
password: string,
repassword: string,
name: string,
phone: string,
email: string,
address: string,
roleAdmin: boolean
}

const DefaultUser: User[] = [
  {
    id: 1,
    user: 'conantunglam',
    password: '123456',
    repassword: '123456',
    name: 'Võ Tùng Lâm',
    phone: '0123456789',
    email: 'votunglamdhsp@gmail.com',
    address: '12 Tôn Đản',
    roleAdmin: true
  },
  {
    id: 2,
    user: 'test01',
    password: '123456',
    repassword: '123456',
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    email: 'nguyenvana@gmail.com',
    address: '12 Tôn Đản',
    roleAdmin: false
  },
  {
    id: 3,
    user: 'test02',
    password: '123456',
    repassword: '123456',
    name: 'Nguyễn Văn B',
    phone: '0123456789',
    email: 'nguyenvanb@gmail.com',
    address: '12 Tôn Đản',
    roleAdmin: false
  },
  {
    id: 4,
    user: 'test03',
    password: '123456',
    repassword: '123456',
    name: 'Nguyễn Văn C',
    phone: '0123456789',
    email: 'nguyenvanc@gmail.com',
    address: '12 Tôn Đản',
    roleAdmin: false
  }
]

@Injectable({
  providedIn: 'root'
})

export class UserRegisteredService {
  constructor() { }

  getListUserDefault(){
    return of(DefaultUser);
  }

  addNewUser(data){
    data.id = DefaultUser.length + 1;
    data.roleAdmin = false;
    DefaultUser.push(data)
  }


}
