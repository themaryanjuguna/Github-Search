import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
<<<<<<< HEAD
//import {Repos} from '../repo';
//import {user} from '../user';


=======
>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19

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
