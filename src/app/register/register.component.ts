import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  fullname;
  username;
  password;
  birthday;
  ngOnInit() {
  }
  Rergister(){
    console.log(this.fullname+" "+this.username+" "+this.password+" "+this.birthday)
  }
}
