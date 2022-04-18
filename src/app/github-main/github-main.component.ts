import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../github-class/details';
import { DetailService } from '../github-service/detail.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-github-main',
  templateUrl: './github-main.component.html',
  styleUrls: ['./github-main.component.css']
})

export class GithubMainComponent implements OnInit {

  alertService:AlertService;
  details:Details;

  constructor(
    detailService:DetailService, alertService:AlertService, private http:HttpClient) { 
    this.details = detailService.getDetail()
    this.alertService = alertService;
   }

  ngOnInit(): void {
    interface ApiResponse{
      
      username: string;
      fullname: string;
      description: string;
      updated: Date;
      hyperlink: string;
      clonelink: string; 
      created: Date;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/defunkt").subscribe(data=>{
      // Succesful API request
      this.details = new Details(data.username, data.fullname, data.description, data.updated, data.hyperlink, data.clonelink, data.created)
    })
  }
  

}
