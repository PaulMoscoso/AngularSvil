import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroupLogin: FormGroup;

  isValid: boolean = false;

  users: any;



  constructor(private fb: FormBuilder, private userService: UserService){
    this.formGroupLogin = fb.group({
      user: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login(){

    this.isValid = this.formGroupLogin.valid;
    if(this.formGroupLogin.valid){
      console.log(this.formGroupLogin.value)
    }

    this.userService.getUser().subscribe(resp =>{
      console.log(resp);
      this.users = resp;
    })

  }


}
