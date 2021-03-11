import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isAuthenticated = false;
  isOpened = true;
  constructor(private uiService: UiService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  toggle(){
    this.isOpened = !this.isOpened;
    this.uiService.isOpen.next(this.isOpened);
  }

  onLogout(){
    this.authService.logout();
  }
}
