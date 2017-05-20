import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import * as roster from '../../assets/roster.json';
import { Profile } from '../profile/profile';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the Roster page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})
export class Roster {
  teamName: string = '';
  players: any;
  positions: Array<any> = ['All'];
  all: any;
  shownGroup = null;
  position: any = 'all';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public callNumber: CallNumber) {
  }

  ngOnInit(){
    // roster
    // filter by position
    // re-order

    this.teamName += `Friends Girls`;
    this.players = roster;
    console.log(roster);
    for(let i = 0; i < roster.length; i++){
      this.positions.indexOf(roster[i].position) === -1 ? this.positions.push(roster[i].position) : null;
    }
  }

  filterPositions(position){
    console.log(position);
    position = position.toLowerCase();
    this.position = position;
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

  // useTelephone(phone){
  //   let $phone = phone.replace(/[^0-9]/g, "");
  //   this.callNumber.callNumber($phone, true)
  //   .then(() => console.log('Launched dialer!'))
  //   .catch(() => console.log('Error launching dialer'));
  // }

}
