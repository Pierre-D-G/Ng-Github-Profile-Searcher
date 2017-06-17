import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: FormControl = new FormControl();
  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.username.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(username => this._githubService.getUser(username)
        .subscribe(user => {
          this.user = user
          this._githubService.getRepos(username).subscribe(repos => {
          this.repos = repos
        })}
      ))
  }
}
