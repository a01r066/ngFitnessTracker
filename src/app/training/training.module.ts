import {NgModule} from '@angular/core';
import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import {TrainingRoutingModule} from './training-routing.module';
import {MaterialModule} from '../material.module';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [TrainingComponent, CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent],
    imports: [
        TrainingRoutingModule,
        MaterialModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule
    ]
})
export class TrainingModule {
}
