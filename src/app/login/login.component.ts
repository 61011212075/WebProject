import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  email;
  password;
  ngOnInit() {
  }
  login(){
    console.log(this.email +" : "+this.password);
  }
  gotoRegister(){
    console.log('GoTO REGISTER');
    this.router.navigateByUrl('register');
  }
}
