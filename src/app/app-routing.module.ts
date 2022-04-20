import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitProfileComponent } from './git-profile/git-profile.component';



const routes: Routes = [
  { path: 'git-profile', component: GitProfileComponent  },
<<<<<<< HEAD
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/github-profile", pathMatch:"full"},
=======

  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/github-main", pathMatch:"full"},
>>>>>>> a27ba8649a269cfd88e55e4dfb39be11d7e8ab19
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
