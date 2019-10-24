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
  

  saveLogin(){
    if(this.loginForm.value.username == 'conantunglam' && this.loginForm.value.password == '123456'){
      this.router.navigate(['./home']);
    }
    else{
      alert('Vui lòng kiểm tra tài khoản hoặc mật khẩu!')
    }
  }

}
