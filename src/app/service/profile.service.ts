import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'
<<<<<<< HEAD
// import { map } from "rxjs/operators"; 
// import {Repos} from './repos';
// import {environment} from '../environments/environment';
=======
>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19

@Injectable()
export class ProfileService {

  private username: string;
<<<<<<< HEAD
=======
  private apikey = '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';

>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19

  constructor(private httpclient: HttpClient) { 
    console.log("service is now ready!");
    this.username = 'themaryanjuguna';
  }

  getProfile(){
<<<<<<< HEAD
    return this.httpclient.get ("https://api.github.com/users/" + this.username);
=======
    return this.httpclient.get ("themaryanjuguna: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:https://api.github.com/users/" + this.username + "/?access_token=" + this.apikey);
>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19

  }
   
    getRepos(){
<<<<<<< HEAD
      return this.httpclient.get ("https://api.github.com/users/" + this.username);
=======
      return this.httpclient.get ("themaryanjuguna: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:https://api.github.com/users/" + this.username + "/repos?access_token=" + this.apikey);
>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19
    }

    updateProfile(username:string){
      this.username = username;

    }

<<<<<<< HEAD
  }
=======
  }



>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19
