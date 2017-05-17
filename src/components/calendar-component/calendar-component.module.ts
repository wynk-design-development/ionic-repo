import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalendarComponent } from './calendar-component';

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    IonicModule.forRoot(CalendarComponent),
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule {}
