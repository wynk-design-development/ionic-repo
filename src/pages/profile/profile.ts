import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as roster from '../../assets/roster.json';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  player: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    console.log(this.navParams.get('playerId'));
    this.player = this.navParams.get('playerId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
    console.log(this.navParams.get('playerId'));
  }

}
