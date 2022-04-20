import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../user'


@Injectable({ providedIn: 'root' })
export class ProfileService {

  username = 'themaryanjuguna';


  constructor(private http: HttpClient) {
    // console.log("service is now ready!");
    // this.username = 'themaryanjuguna';
  }

  // getProfile(): Observable<any>{
  //   let httpHeaders = new HttpHeaders({'Authorization': 'token' + environment.GITHUB_ACCESS_TOKEN });
  //   let searchUrl = environment.GITHUB_API_URL + this.username 
  //   let header = {httpHeaders: httpHeaders};
  //   return this.httpclient.get<any>(searchUrl,header);

  // }
  getProfile(): Observable<UserInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token' + environment.GITHUB_ACCESS_TOKEN });
    let searchUrl = environment.GITHUB_API_URL + this.username
    let searchOptions = { headers: headers };
    return this.http.get<UserInterface>(searchUrl,searchOptions);
  }

  getRepos(): Observable<UserInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token' + environment.GITHUB_ACCESS_TOKEN });
    let searchUrl = environment.GITHUB_API_URL + this.username + `repos`
    let searchOptions = { headers: headers };
    return this.http.get<UserInterface>(searchUrl,searchOptions);
   }

  updateProfile(name: string) {
    this.username = name;

  }

}
