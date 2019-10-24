import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserRegisteredService, User } from 'src/app/service/user-registered.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  listUser: User[];
  constructor(
    private fb: FormBuilder,
    private userRegisteredService: UserRegisteredService,
    private router: Router

  ) { }

  ngOnInit() {
    this.getListUser();

  }

  getListUser(){
    this.userRegisteredService.getListUserDefault().subscribe(data => {
      this.listUser = data;
    })
  }
  
  saveLoginForm(data: any){
    this.userRegisteredService.addNewUser(data.value);
    this.getListUser();
    console.log(this.listUser)
    this.registeredForm.reset();
    Swal.fire({
      title: 'Thành Công!',
      text: 'Tài khoản đã được tạo. Đang chuyển sang trang đăng nhập!',
      type: 'success',
      timer: 2000
    });
    this.router.navigate(['./login']);

  }

  registeredForm = this.fb.group({

    user: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required]

  }, {validator: this.checkPasswords })

  checkPasswords(group: FormGroup) { 
    let pass = group.get('password').value;
    let confirmPass = group.get('repassword').value;  
    return pass === confirmPass ? null : { notSame: true } ;

}

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


}
