import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// angular modules
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Firebase
import { AngularFireModule } from 'angularfire2';

// native
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

// pages
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Options } from '../pages/options/options';
import { Profile } from '../pages/profile/profile';
import { Roster } from '../pages/roster/roster';
import { Schedule } from '../pages/schedule/schedule';
import { Workouts } from '../pages/workouts/workouts';
import { Drills } from '../pages/drills/drills';
import { AddPlayer } from '../pages/add-player/add-player';

// components
import { ListComponent } from '../components/list-component/list-component';
import { TitleComponent } from '../components/title-component/title-component';
import { CalendarComponent } from '../components/calendar-component/calendar-component';



// Firebase config settings
export const firebaseConfig = {
    apiKey: "AIzaSyCwXFVy3n5wUdOOX71g3LqlkkdN0tuthpc",
    authDomain: "practice-app-79e8d.firebaseapp.com",
    databaseURL: "https://practice-app-79e8d.firebaseio.com",
    projectId: "practice-app-79e8d",
    storageBucket: "practice-app-79e8d.appspot.com",
    messagingSenderId: "495692730199"
};

@NgModule({
  declarations: [
    MyApp,
    //pages
    HomePage,
    Login,
    Register,
    Options,
    Profile,
    Roster,
    Schedule,
    Workouts,
    Drills,
    AddPlayer,
    //components
    ListComponent,
    TitleComponent,
    CalendarComponent
    //ionic components
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig) //initialize Firebase
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    Options,
    Profile,
    Roster,
    Schedule,
    Workouts,
    Drills,
    AddPlayer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //native
    CallNumber,
    EmailComposer
  ]
})
export class AppModule {}
