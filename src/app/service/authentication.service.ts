import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Client} from "../model/Client";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Client>;
  public currentUser: Observable<Client>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Client>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Client {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>("http://localhost:8080/client/sign", { username, password })
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(<Client><unknown>null);

  }
}
