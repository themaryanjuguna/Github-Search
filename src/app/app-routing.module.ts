import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitProfileComponent } from './git-profile/git-profile.component';



const routes: Routes = [
  { path: 'git-profile', component: GitProfileComponent  },
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/git-profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
