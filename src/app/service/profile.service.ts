import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../user';
import { RepoInterface } from '../repo';


@Injectable({ providedIn: 'root' })
export class ProfileService {

  username = 'themaryanjuguna';
  ExistingRepos: any;
  searchRepo = "gitsearch" 
  REPO_URL = `https://api.github.com/search/repositories?q=`;



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

  getRepos(): Observable<RepoInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token' + environment.GITHUB_ACCESS_TOKEN });
    let searchUrl = environment.GITHUB_API_URL + this.username + "/repos";
    let searchOptions = { headers: headers };
    return this.http.get<RepoInterface>(searchUrl,searchOptions);
   }
   UpdateRepos(): Observable<RepoInterface>{
    return this.http.get<RepoInterface>(this.REPO_URL + this.searchRepo + "");
  
    }
 
   updateProfile(name: string) {
    this.username = name;

  }


  updateRepo (repoName: string) {
    this.searchRepo = repoName;


  }
  

}
