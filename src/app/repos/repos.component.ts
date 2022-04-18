import { DetailService } from '../github-service/detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  users: any;


  constructor(private detailService: DetailService ) { }

  ngOnInit() {

    this.users = this.detailService.getUsers();
    
 


  }

}
