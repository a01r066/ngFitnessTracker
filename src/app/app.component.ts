import {Component, OnInit} from '@angular/core';
import {UiService} from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngFitnessTracker';
  isOpened = true;

  constructor(private uiService: UiService) {
  }

  ngOnInit(): void {
    this.uiService.isOpen.subscribe(isOpened => {
      this.isOpened = isOpened;
    });
  }
}
