import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatapassService } from '../datapass.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient,private service:DatapassService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  username;
  password;

  descript;
  ngOnInit() {
  }
  login(){
    console.log(this.username +" : "+this.password);

    let body = {u_username: this.username, u_password: this.password};
    console.log(body);


    this.http.post('http://m-h.comsciproject.com/user/login', JSON.stringify(body), {headers:{'Content-Type': 'application/json'}})
      .subscribe(response => {
        // console.log(response);
        this.descript = response['descript'];

        if (response['status'] == 1) {
          
          this.http.get('http://m-h.comsciproject.com/user?key='+this.username)
          .subscribe(res => {
            // console.log(response);
            console.log(res['data']);
            var data = res['data'];
            console.log(data.list[0].username);
            this.service.u_name = data.list[0].full_name;
            this.service.u_img = data.list[0].picture.show;
            this.storage.set('u_img',data.list[0].picture.show);
            this.storage.set('full_name',data.list[0].full_name);

          });
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
