import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isOpened = true;
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpened = !this.isOpened;
    this.uiService.isOpen.next(this.isOpened);
  }
}
