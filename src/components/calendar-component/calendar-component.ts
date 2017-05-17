import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// Calendar
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';



const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
}; //colors



@Component({
  selector: 'calendar-component',
  templateUrl: 'calendar-component.html'
})



export class CalendarComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();

  events: any[] = [];
  // events: CalendarEvent[] = [{
  //   start: subDays(startOfDay(new Date()), 1),
  //   end: addDays(new Date(), 1),
  //   title: 'A 3 day event',
  //   color: colors.red,
  //   actions: this.actions
  // }, {
  //   start: startOfDay(new Date()),
  //   title: 'An event with no end date',
  //   color: colors.yellow,
  //   actions: this.actions
  // }, {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'A long event that spans 2 months',
  //   color: colors.blue
  // }, {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'A draggable and resizable event',
  //   color: colors.yellow,
  //   actions: this.actions,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   },
  //   draggable: true
  // }];

  activeDayIsOpen: boolean = true;
  	private schedule: FirebaseListObservable<any>;
  	private uid: string;

  	constructor(
  		public alertCtrl: AlertController,
    	public af: AngularFire
    ) {
  		this.af.auth.subscribe(auth => {
	      if ( auth ) {
	        this.uid = auth.uid;
	        this.schedule = af.database.list(this.uid+'/schedule/');
	        console.log('schedule - ',this.schedule);
	      }
    	});
    }



    ngOnInit() {
    	console.log('---ngOnInit---');
    	this.getEvents();
    } //ngOnInit



    getEvents(): void {
    	console.log('---getEvents---');
    	this.schedule.subscribe(
    		res => {
    			this.setEvents(res);
    		})
    } //getEvents



    setEvents(events): void {
    	console.log('---setEvents---');
    	this.events = []; // TODO - find better way to prevent dupe events
    	for ( let i = 0, length = events.length; i < length; i++ ) {
    		let eventInfo = {
    			start: addDays(events[i].startDate, 0),
    			end: addDays(events[i].endDate, 0),
    			title: events[i].title,
    			color: colors.red,
    		}
    		this.events.push(eventInfo);
    	}
    	this.refresh.next();
    	console.log('this.events - ',this.events);
    } //setEvents



		dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {
			if (isSameMonth(date, this.viewDate)) {
				if (
					(isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
					events.length === 0
				) {
					this.activeDayIsOpen = false;
				}
				else {
					this.activeDayIsOpen = true;
					this.viewDate = date;
				}
			}
		} //dayClicked



	eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
		event.start = newStart;
		event.end = newEnd;
		this.handleEvent('Dropped or resized', event);
		this.refresh.next();
	} //eventTimesChanged



	handleEvent(action: string, event: CalendarEvent): void {
		// this.modalData = {event, action};
		// this.modal.open(this.modalContent, {size: 'lg'});
	} //handleEvent



  addEvent(): void {
  	let prompt = this.alertCtrl.create({
      title: 'Add Event',
      message: "Add event to schedule",
      inputs: [
        {
          name: 'type',
          placeholder: 'Type',
          type: 'text'
        },
        {
          name: 'title',
          placeholder: 'Title',
          type: 'text'
        },
        {
          name: 'startDate',
          placeholder: 'Start Date',
          type: 'date'
        },
        {
          name: 'endDate',
          placeholder: 'End Date',
          type: 'date'
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
            this.schedule.push({
              type: data.type,
              title: data.title,
              startDate: data.startDate,
              endDate: data.endDate
            });
          }
        }
      ]
    });
    prompt.present();
    this.refresh.next();

    // this.events.push({
    //   title: 'New event',
    //   start: startOfDay(new Date()),
    //   end: endOfDay(new Date()),
    //   color: colors.red,
    //   draggable: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   }
    // });
    // this.refresh.next();
  } //addEvent
}

