import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Firebase
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

// pages
import { HomePage } from '../home/home';
import { Register } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})



export class Login {
  public pageTitle = 'Login';
  public registerCredentials = {email: '', password: ''};

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public af: AngularFire
  ) {
    // check if user is logged in
    this.af.auth.subscribe(auth => {
      if ( auth ) {
        console.log('auth - ',auth);
        this.navCtrl.setRoot( HomePage );
      }
    })
  } //constructor



  public createAccount() {
    this.navCtrl.push( Register );
  } //createAccount



  public login( formData ) {
    if(formData.valid) {
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
      (success) => {
        console.log(success);
        this.navCtrl.setRoot(HomePage)
      }).catch(
        (err) => {
        console.log(err);
        this.showError(err);
      })
    }
  } //login



  public showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  } //showError



  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  } //ionViewDidLoad
}
