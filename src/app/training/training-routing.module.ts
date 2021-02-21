import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingComponent} from './training.component';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {NewTrainingComponent} from './new-training/new-training.component';
import {PastTrainingComponent} from './past-training/past-training.component';

const routes: Routes = [
  { path: 'training', component: TrainingComponent, children: [
      { path: '', component: CurrentTrainingComponent },
      { path: 'new', component: NewTrainingComponent },
      { path: 'past', component: PastTrainingComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {
}
