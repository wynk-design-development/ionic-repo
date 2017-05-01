import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import * as roster from '../../assets/roster.json';
import { Profile } from '../profile/profile';
/**
 * Generated class for the Roster page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html',
})
export class Roster {

  players: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.players = roster;
    console.log(roster);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Roster');
  }

  showPlayerDetails(player){
    this.navCtrl.push(Profile, {
      playerId: player
    });
    // this.navParams.set('id', id);
  }

}
