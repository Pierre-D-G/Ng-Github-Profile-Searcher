import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent {
  user: any;
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user
    })
  }
}
