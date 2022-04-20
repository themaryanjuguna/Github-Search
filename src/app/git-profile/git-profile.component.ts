import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

//import {Repos} from '../repo';
//import {user} from '../user';



@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {

  profile: any[] = [];
  repos: any[] = [];
  username!: string;

  constructor(private profileService: ProfileService) { 
    
  }

  findprofile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfile().subscribe((profile: any) =>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfile().subscribe((repos: any) =>{
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit(): void {
  }

}
