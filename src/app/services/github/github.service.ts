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
  getUser = () => {
    return this._http.get('http://api.github.com/users/' + this.username)
    .map(res => res.json())
  }
}
