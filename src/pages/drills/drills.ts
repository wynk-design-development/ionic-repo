import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Components
import { ListComponent } from '../components/login.component';



@IonicPage()
@Component({
  selector: 'page-drills',
  templateUrl: 'drills.html',
})



export class Drills {
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Drills');
  }
}
