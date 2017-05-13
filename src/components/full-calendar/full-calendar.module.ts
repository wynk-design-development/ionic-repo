import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FullCalendarComponent } from './full-calendar';

@NgModule({
  declarations: [
    FullCalendarComponent,
  ],
  imports: [
    IonicModule.forRoot(FullCalendarComponent),
  ],
  exports: [
    FullCalendarComponent
  ]
})
export class FullCalendarModule {}
