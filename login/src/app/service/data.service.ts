import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
   private url: string = 'http://10.101.10.122:8090/Angular2WebserviceForLogin/';
  constructor(private http: Http) { }

  login(post): Observable<any> {

    
    const getLoginUrl = this.url + 'login/' + post['username'] + '/' + post['password'];
    return this.http
      .get(getLoginUrl, {})
      .map(
      res => {
        if (res.json().status == 'success') {
          localStorage.setItem('currentUser', JSON.stringify(res.json().data));
        }
        return res.json();
      },
      err => {
        return err;
      }
      )
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
  getItem(): Observable<any> {
    const getItemUrl = this.url + 'get/item/list';
    return this.http
      .get(getItemUrl, {})
      .map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
      )
  }


}
