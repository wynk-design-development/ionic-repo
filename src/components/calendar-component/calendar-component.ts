import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//calendar components
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
};



@Component({
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'calendar-component.html'
})



export class CalendarComponent implements OnInit, OnDestroy {
  schedule: FirebaseListObservable<any>;
  scheduleSubscription: Subscription;
  uid: string;
  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  modalData: {
    action: string,
    event: CalendarEvent
  };
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  // actions: CalendarEventAction[] = [{
  //   label: '<i class="fa fa-fw fa-pencil"></i>',
  //   onClick: ({event}: { event: CalendarEvent }): void => {
  //     this.handleEvent('Edited', event);
  //   }
  // }, {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({event}: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }];



    constructor(
        private modal: NgbModal,
        public af: AngularFire,
        public alertCtrl: AlertController
    ) {
        this.af.auth.subscribe(auth => {
          if (auth) {
            this.uid = auth.uid;
            this.schedule = af.database.list(this.uid + '/schedule/');
          }
        });
    } //constructor

    ngOnInit() {
        this.getEvents();
    } //ngOnInit

    ngOnDestroy() {
        if ( this.scheduleSubscription ) { this.scheduleSubscription.unsubscribe() }
    } //ngOnDestroy

    getEvents() {
        console.log('---getEvents---');
        this.scheduleSubscription = this.schedule.subscribe(
            res => {
                console.log('SUCCESSFUL GETTING EVENTS - ',res);
                for ( let i=0; i < res.length; i++ ) {
                    let eventInfo = {
                        start: new Date(res[i].startDate),
                        title: res[i].title,
                        color: colors.red
                    }
                    this.events.push(eventInfo);
                    this.refresh.next();
                }
          },
          err => {
              console.log('ERROR GETTING EVENTS - ',err);
          }
        )
    } //getEvents

    dayClicked({date, events}: { date: Date, events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
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
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    } //handleEvent

    addEvent(): void {
        let prompt = this.alertCtrl.create({
            title: 'Event Name',
            message: "Enter event",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
                {
                    name: 'startDate',
                    placeholder: 'Start Date',
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
                        this.schedule.push({
                            title: data.title,
                            startDate: data.startDate
                        });
                    }
                }
            ]
        });
        prompt.present();
    }
}
