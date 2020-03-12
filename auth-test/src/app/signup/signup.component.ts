import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl('')
  });

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  signup(){
    console.debug('SIGNUP: ', this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.repeatpassword);
    this.authService.signup(this.signupForm.value.username, this.signupForm.value.password);
  }
}
