import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  Register(username:HTMLInputElement,email:HTMLInputElement,password:HTMLInputElement){
    const regObj={
      userName:username.value,
      email:email.value,
      password:password.value
    };

    this.authService.Register(regObj).subscribe(resp=>{
      console.log(resp);
      this.router.navigate(['login'])
    })
  }

}
