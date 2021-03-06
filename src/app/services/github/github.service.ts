import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class GithubService {
  // private username: string;
  constructor(private _http: Http) {
    // this.username = 'ErikBjare';
  }
  // Get Username info
  getUser = (username: string) => {
    return this._http.get('http://api.github.com/users/' + username)
      .map(res => res.json())
  }
  //  Get Users Respositories
  getRepos = (username: string) => {
    return this._http.get('http://api.github.com/users/' + username + '/repos?page=1&per_page=10&sort=updated')
      .map(res => res.json())
  }
}
