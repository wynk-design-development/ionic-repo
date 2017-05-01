import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { Roster } from '../roster/roster';
import { Schedule } from '../schedule/schedule';
import { Workouts } from '../workouts/workouts';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goTo(value){
    switch(value){
      case 'Roster':
        this.navCtrl.push(Roster);
      break;
      case 'Schedule':
        this.navCtrl.push(Schedule);
      break;
      case 'Workouts':
        this.navCtrl.push(Workouts);
      break;
      case 'Profile':
        this.navCtrl.push(Profile);
      break;
    }
  }

}
