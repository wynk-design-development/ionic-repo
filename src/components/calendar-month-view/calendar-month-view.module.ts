import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalendarMonthViewComponent } from './calendar-month-view';

@NgModule({
  declarations: [
    CalendarMonthViewComponent,
  ],
  imports: [
    IonicModule.forRoot(CalendarMonthViewComponent),
  ],
  exports: [
    CalendarMonthViewComponent
  ]
})
export class CalendarMonthViewModule {}
