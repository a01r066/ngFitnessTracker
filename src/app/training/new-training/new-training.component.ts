import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  foods = [
    {title: 'Item 1', value: 1},
    {title: 'Item 2', value: 2},
    {title: 'Item 3', value: 3},
    {title: 'Item 4', value: 4}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
