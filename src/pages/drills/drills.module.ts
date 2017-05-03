import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Drills } from './drills';

@NgModule({
  declarations: [
    Drills,
  ],
  imports: [
    IonicModule.forRoot(Drills),
  ],
  exports: [
    Drills
  ]
})
export class DrillsModule {}
