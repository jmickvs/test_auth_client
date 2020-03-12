import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  siginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthenticateService) {}

  ngOnInit() {
  }

  signin(){
    console.debug('SIGNIN!!!', this.siginForm.value.username, this.siginForm.value.password);
    this.authService.sigin(this.siginForm.value.username, this.siginForm.value.password);
  }

}
