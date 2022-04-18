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


  submitUsername() {
    
  }



  constructor() { }

  ngOnInit(): void {
        
  }
  

}
