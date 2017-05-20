import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import * as roster from '../../assets/roster.json';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public callNumber: CallNumber,
    public emailComposer: EmailComposer,
    public alertController: AlertController) {
  }

  ngOnInit(){
    console.log(this.navParams.get('playerId'));
    this.player = this.navParams.get('playerId');
    console.log(this.player);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
    console.log(this.navParams.get('playerId'));
  }

  callMe(phone){
    let $phone = phone.replace(/[^0-9]/g, "");
    this.callNumber.callNumber($phone, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  emailMe(email){

    let $email = {
      to: email,
      cc: '',
      bcc: ['calebswank11@icloud.com', ''],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    this.emailComposer.isAvailable().then((available: boolean) =>{
      console.log(available);
      if(available) {
        // Send a text message using default options
        this.emailComposer.open($email);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  showBadgeDetails(type){
    let alert = this.alertController.create({
      title: `${type} award`,
      subTitle: `${this.player['name']} won the ${type} award.`,
      buttons: ['Dismiss']
    });
    alert.present()
  }

}
