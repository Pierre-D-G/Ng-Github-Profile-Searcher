import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { SearchComponent } from './components/Search/search.component';

import { GithubService } from './services/github/github.service';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
