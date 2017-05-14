import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'full-calendar',
  templateUrl: 'full-calendar.html'
})



export class FullCalendarComponent implements OnInit {

	constructor(
	public alertCtrl: AlertController
	) {} //constructor



    ngOnInit() {}



    calendarOptions:Object = {
        fixedWeekCount : false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2016-09-01'
          },
          {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
          }
        ]
      };



      addEvent(): void {
      	console.log('---addEvent---');
			let prompt = this.alertCtrl.create({
			title: 'Event Name',
			message: "Fill out event info",
			inputs: [
				{
					name: 'title',
					placeholder: 'Title',
				},
				{
					name: 'startDate',
					placeholder: 'Start',
				},
				{
					name: 'endDate',
					placeholder: 'end'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Save',
					handler: data => {
						console.log('data - ',data);
					}
				}
			]
			});
			prompt.present();
      } //addEvent
}