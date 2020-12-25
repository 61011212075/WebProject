import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  fullname;
  username;
  password;
  birthday;

  descript;

  ngOnInit() {
  }
  Rergister(){
    console.log(this.fullname+" "+this.username+" "+this.password+" "+this.birthday)

    let body = {
      u_username: this.username,
      u_fullname: this.fullname,
      u_birthday: this.birthday,
      u_password: this.password
    };
    console.log(body);


    this.http.post('http://m-h.comsciproject.com/register', JSON.stringify(body), {headers:{'Content-Type': 'application/json'}})
      .subscribe(response => {
        console.log(response);
        this.descript = response['descript'];

      }, error => {
        console.log('fail');
      });
  }
}
