import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private readonly apiUrl='http://api.basarsen.com.tr/ngwitter/';

  constructor(private http:HttpClient,private router:Router) { }

  IsLoggedIn():boolean{
    const token=localStorage.getItem('token');

    if (token){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }

  Register(obj){
    return this.http.post(this.apiUrl+'Register',obj);
  }

  GetToken(obj){
    return this.http.post(this.apiUrl+'Token',obj);
  }

}
