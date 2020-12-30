import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient) { }

  username;
  password;

  descript;
  ngOnInit() {
  }
  login(){
    console.log(this.username +" : "+this.password);

    let body = {u_username: this.username, u_password: this.password};
    console.log(body);


    this.http.post('http://m-h.comsciproject.com/login', JSON.stringify(body), {headers:{'Content-Type': 'application/json'}})
      .subscribe(response => {
        console.log(response);
        this.descript = response['descript'];

        if (response['status'] == 1) {
          this.router.navigateByUrl('home');
        }

      }, error => {
        console.log('fail');
      });
  }
  gotoRegister(){
    console.log('GoTO REGISTER');
    this.router.navigateByUrl('register');
  }
}
