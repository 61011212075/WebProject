import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : DatapassService,private http :HttpClient,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { 
    console.log(service.u_name);
  }
  ngOnInit() {
    this.service.u_img = this.storage.get('u_img');
    this.service.u_name = this.storage.get('full_name');
  }

}
