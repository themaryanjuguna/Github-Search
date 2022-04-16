import { GithubMainComponent } from './github-main/github-main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'github-main', component: GithubMainComponent },
  { path: 'repos', component: ReposComponent },{ path:'**', component:NotFoundComponent},


{ path: '', redirectTo:"/repos", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
