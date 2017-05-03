import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import * as roster from '../../assets/roster.json';
import { Profile } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html',
})
export class Roster {
  public pageTitle: string = 'Roster';
  public players: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}



  ngOnInit(){
    this.players = roster;
    console.log(roster);
  } //ngOnInit



  showPlayerDetails( player ) {
    this.navCtrl.push(Profile, {
      playerId: player
    });
  } //showPlayerDetails



  ionViewDidLoad() {
    console.log('ionViewDidLoad Roster');
  } //ionViewDidLoad
}
