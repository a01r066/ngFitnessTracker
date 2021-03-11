import {Component, OnInit} from '@angular/core';
import {Exercise} from '../exercise.model';
import {TrainingService} from '../training.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  trainingExercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingExercises = this.trainingService.getAvailableExercises();
  }

  onTraining(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);
  }

}
