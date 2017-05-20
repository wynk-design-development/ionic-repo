import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

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

// components
import { ListComponent } from '../components/list-component/list-component';
import { TitleComponent } from '../components/title-component/title-component';



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
    //components
    ListComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
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
    Drills
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
