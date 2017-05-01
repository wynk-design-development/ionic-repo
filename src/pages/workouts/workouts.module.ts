import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Workouts } from './workouts';

@NgModule({
  declarations: [
    Workouts,
  ],
  imports: [
    IonicPageModule.forChild(Workouts),
  ],
  exports: [
    Workouts
  ]
})
export class WorkoutsModule {}
