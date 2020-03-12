import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }

  sigin(username: string, password: string){
    console.debug('SIGNIN!!!');
    this.httpClient.post("http://localhost:3000/signin",
    {
      "username":  username,
      "password":  password
    })
    .subscribe(data  => {
      console.log("POST Request is successful ", data);
    }, error  => {
      console.log("Error", error);
    });
  }

  signup(username: string, password: string){
    console.debug('SIGNUP: ');
    this.httpClient.post("http://localhost:3000/signup",
    {
      "username":  username,
      "password":  password
    })
    .subscribe(data  => {
      console.log("POST Request is successful ", data);
    },
    error  => {
      console.log("Error", error);
    });
  }
}
