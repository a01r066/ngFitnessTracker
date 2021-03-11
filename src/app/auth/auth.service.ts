import {User} from './user.model';
import {Authdata} from './authdata.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  isAuthenticated = false;

  constructor(private router: Router) {
  }

  isAuth(){
    return this.isAuthenticated;
  }

  register(authData: Authdata){
    this.user = {
      uid: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    };
    this.authSuccessfull();
  }

  authSuccessfull(){
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  login(authData: Authdata){
    this.user = {
      uid: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    };
    this.authSuccessfull();
  }

  logout(){
    this.isAuthenticated = false;
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(){
    return {...this.user};
  }
}
