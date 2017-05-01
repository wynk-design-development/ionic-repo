import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Options } from '../pages/options/options';
import { Profile } from '../pages/profile/profile';
import { Roster } from '../pages/roster/roster';
import { Schedule } from '../pages/schedule/schedule';
import { Workouts } from '../pages/workouts/workouts';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Options,
    Profile,
    Roster,
    Schedule,
    Workouts
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Options,
    Profile,
    Roster,
    Schedule,
    Workouts
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
