import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { AddPlayer } from '../add-player/add-player';
import * as roster from '../../assets/roster.json';
import { Profile } from '../profile/profile';
import { CallNumber } from '@ionic-native/call-number';

// Components
import { ListComponent } from '../components/login.component';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})

export class Roster {
  teamName: string = '';
  public players: any;
  positions: Array<any> = ['All'];
  all: any;
  shownGroup = null;
  position: any = 'all';
  public pageTitle: string = 'Roster';
  private addPlayerModal: boolean = false;

  // firebase
  private uid: string;
  private roster: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public callNumber: CallNumber,
    public af: AngularFire) {

      this.af.auth.subscribe(auth => {
        if ( auth ) {
          this.uid = auth.uid;
          this.roster = af.database.list(this.uid+'/roster/');
          console.log('roster - ',this.roster);
        }
      });

  }

  ngOnInit(){
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

  showPlayerDetails( player ) {
    console.log(player);
    this.navCtrl.push(Profile, {
      playerId: player
    });
  } //showPlayerDetails

  // useTelephone(phone){
  //   let $phone = phone.replace(/[^0-9]/g, "");
  //   this.callNumber.callNumber($phone, true)
  //   .then(() => console.log('Launched dialer!'))
  //   .catch(() => console.log('Error launching dialer'));
  // }

  addNewPlayer(){
    this.navCtrl.push(AddPlayer);
  }
}
