import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  onLogout(){
    this.authService.logout();
  }
}
