import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  GetToken(email:HTMLInputElement,password:HTMLInputElement){
    const tokenObj={
      email:email.value,
      password:password.value
    };

    this.authService.GetToken(tokenObj).subscribe((resp:any)=>{
      localStorage.setItem('token',resp.access_token);
      console.log(resp.access_token);
      this.router.navigate([''])
    });
  }

}
