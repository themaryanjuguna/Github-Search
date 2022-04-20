import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'
// import { map } from "rxjs/operators"; 
// import {Repos} from './repos';
// import {environment} from '../environments/environment';

@Injectable()
export class ProfileService {

  private username: string;
  private apikey = '';


  constructor(private httpclient: HttpClient) { 
    console.log("service is now ready!");
    this.username = 'themaryanjuguna';
  }

  getProfile(){
    return this.httpclient.get ("https://api.github.com/users/" + this.username);

  }
   
    getRepos(){
      return this.httpclient.get ("https://api.github.com/users/" + this.username);
    }

    updateProfile(username:string){
      this.username = username;

    }

  }
