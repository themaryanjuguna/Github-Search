import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';



@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {

  profile: any;
  repos: any;
  username!: string;

  constructor(private profileService: ProfileService) { 
    
  }

  findprofile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfile().subscribe((profile: any) =>{
      this.profile = profile;
      console.log(profile);

    });
    this.profileService.updateRepo(this.username);
    this.profileService.getRepos().subscribe((repos: any) =>{
      this.repos = repos;
      console.log(repos);

     });
     this.profileService.getRepos().subscribe(repository => {
      this.repos = repository
    });


    this.profileService.getRepos().subscribe(repository => {
      this.repos = repository
      console.log(this.repos);

    })
  }
  

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      data => {this.profile = data
      console.log(this.profile)

      }
    )
  }

}
