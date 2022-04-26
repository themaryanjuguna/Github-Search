import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProfileService } from './service/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitProfileComponent } from './git-profile/git-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    GitProfileComponent,
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
