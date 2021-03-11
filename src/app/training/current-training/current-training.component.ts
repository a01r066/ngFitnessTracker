import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StopTrainingComponent} from './stop-training.component';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private matDialog: MatDialog,
              private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.startOrResumeTraining();
  }

  startOrResumeTraining(){
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100){
        clearInterval(this.timer);
        this.trainingService.completeExercise();
      }
    }, step);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.matDialog.open(StopTrainingComponent, { data: {
        progress: this.progress
      }});
    dialogRef.afterClosed().subscribe(res => {
      // console.log(res);
      if (res){
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTraining();
      }
    });
  }
}
