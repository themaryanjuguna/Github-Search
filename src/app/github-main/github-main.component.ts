import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../github-class/details';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-github-main',
  templateUrl: './github-main.component.html',
  styleUrls: ['./github-main.component.css']
})

export class GithubMainComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  details:Details;

  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient) { 
    this.goals = goalService.getGoals()
    this.alertService = alertService;
   }

  ngOnInit(): void {
    interface ApiResponse{
      
      name: string;
      fullname: string;
      description: string;
      updated:Date;
      hyperlink: string;
      clonelink: string; 
      language: string; 
      created:Date;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/defunkt").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.name, data.fullname, data.description, data.updated, data.hyperlink, data.clonelink, data.language, data.created)
    })
  }
  

}
