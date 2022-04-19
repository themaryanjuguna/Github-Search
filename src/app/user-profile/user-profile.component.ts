import { DetailService } from './../github-service/detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute    
    ) { }

  ngOnInit() {
    //grab the username out of the url
    this.route.params.subscribe(params =>{
      const username = params['username'];

      // use the detailservice to get data from
      this.detailService
        .getUser(username)
        .subscribe(user =>  this.user = user);
       
  });


    
    }
  }