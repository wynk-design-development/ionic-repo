import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

//Firebase
import { AngularFire } from 'angularfire2';

//pages
import { Login } from '../../pages/login/login';



@Component({
  selector: 'title-component',
  templateUrl: 'title-component.html'
})



export class TitleComponent {
	@Input() pageTitle: string;

  constructor(
  	public navCtrl: NavController,
  	public af: AngularFire
  ) {}



	public logout() {
		this.af.auth.logout().then(auth => {
			if (!auth) {
				this.navCtrl.setRoot( Login );
			}
		});
	} //logout
}
