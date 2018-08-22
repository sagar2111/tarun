import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';



import { User } from '../_models/index';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()


export class UserService {
 private userUrl = 'http://10.101.10.122:8090/Angular2WebserviceForLogin';
    constructor(private http: HttpClient) { }

   public create(user) {
    return this.http.post<User>(this.userUrl + '/postcustomer', user);
  }
    getAll() {
        return this.http.get<User[]>('http://10.101.10.122:8090/Angular2WebserviceForLogin');
    }

    getById(id: number) {
        return this.http.get('http://10.101.10.122:8090/Angular2WebserviceForLogin' + id);
    }

   // public create(user: User) {
   //     return this.http.post('this.userUrl+"/postcustomer/', user);
   // }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
