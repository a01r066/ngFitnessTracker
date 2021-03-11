import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StopTrainingComponent} from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0;
  timer: number;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTraining();
  }

  startOrResumeTraining(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100){
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.matDialog.open(StopTrainingComponent, { data: {
        progress: this.progress
      }});
    dialogRef.afterClosed().subscribe(res => {
      // console.log(res);
      if (res){
        this.trainingExit.emit();
      } else {
        this.startOrResumeTraining();
      }
    });
  }
}
