import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Roster } from './roster';

@NgModule({
  declarations: [
    Roster,
  ],
  imports: [
    IonicPageModule.forChild(Roster),
  ],
  exports: [
    Roster
  ]
})
export class RosterModule {}
