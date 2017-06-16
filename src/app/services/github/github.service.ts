import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  constructor(private _http: Http) {
    // this.username = 'Pierre-D-G';
    this.username = 'ErikBjare';
  }
  // Get Username info
  getUser = () => {
    return this._http.get('http://api.github.com/users/' + this.username)
      .map(res => res.json())
  }
  //  Get Users Respositories
  getRepos = () => {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?page=1&per_page=10&sort=updated')
      .map(res => res.json())
  }
}
