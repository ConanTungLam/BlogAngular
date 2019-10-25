import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegisteredService, User } from 'src/app/service/user-registered.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listUser: User[];

  constructor(
    private fb: FormBuilder,
    private userRegisteredService: UserRegisteredService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListUser();
    console.log(this.loginForm.value)
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  getListUser(){
    this.userRegisteredService.getListUserDefault().subscribe(data => {
      this.listUser = data;
    })
  }
  

  checkLogin(){
    let user = this.loginForm.value.username;
    let pwd = this.loginForm.value.password;
    let index: number;
    if(this.listUser.filter(x => x.user === user).length > 0){
      for(var i = 0; i < this.listUser.length; i++){
        if(this.listUser[i].user == user){
          index = i;
          break;
        }
      }
      if(this.listUser[index].password === pwd){
        this.router.navigate(['./home']);
      }
      else{
        alert("Sai mật khẩu!")
      }

    }
    else{
      alert('Vui lòng kiểm tra tài khoản hoặc mật khẩu!')
    }
  }

}
