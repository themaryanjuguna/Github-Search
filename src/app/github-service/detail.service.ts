import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DetailService {

  private SERVER_URL = "";
  

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}



  // get all users
  getUsers() {

    return this.http.get(`${this.apiUrl}?per_page=12`);

  }


  // Get as single user by username

  getUser(_username: string) {

    return this.http.get('https://api.github.com/users/${username}');
    

  }

  getRepos(_username: string) {

    return this.http.get('https://api.github.com/users/${username}/repos');

  }

}




