import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private _http: HttpClient;
  url = 'http://localhost:9001/addFriend';

  constructor(http: HttpClient) {
    this._http = http;
  }

  addFriend(newFriend: Friend):
    Observable<any> {
    return this._http.post<any>(this.url, newFriend)
  }


}






