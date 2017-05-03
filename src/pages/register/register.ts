import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

//Firebase
import { AngularFire } from 'angularfire2';

// pages
import { HomePage } from '../home/home';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})



export class Register {
  createSuccess = false;
  registerCredentials = {email: '', password: ''};
  state: string = '';
  error: any;

  constructor(
      private navCtrl: NavController,
      private alertCtrl: AlertController,
      public af: AngularFire
  ) {}



  public register(formData) {
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.showPopup("Success", "Account created.");
        this.navCtrl.setRoot(HomePage);
        console.log(success);
      }).catch(
        (err) => {
        this.showPopup("Error", err);
        this.error = err;
        console.log(err);
      })
  } //register



  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.navCtrl.setRoot(HomePage);
           }
         }
       }
     ]
    });
    alert.present();
} //showPopup
}
