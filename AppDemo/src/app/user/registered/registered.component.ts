import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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

    return pass === confirmPass ? null : { notSame: true }     
}

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  saveLoginForm(data: any){
    console.log(data.value)
  }

}
