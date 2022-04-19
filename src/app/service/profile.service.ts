import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username: string;
  private apikey = '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';


  constructor(private httpclient: HttpClient) { 
    console.log("service is now ready!");
    this.username = 'themaryanjuguna';
  }

  getProfile(){
    return this.httpclient.get ("themaryanjuguna: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:https://api.github.com/users/" + this.username + "/?access_token=" + this.apikey);

  }
   
    getRepos(){
      return this.httpclient.get ("themaryanjuguna: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:https://api.github.com/users/" + this.username + "/repos?access_token=" + this.apikey);
    }

    updateProfile(username:string){
      this.username = username;

    }

  }



