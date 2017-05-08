import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})



export class Schedule {
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {} //constrcutor



  ionViewDidLoad() {
    console.log('ionViewDidLoad Schedule');
  }
}
