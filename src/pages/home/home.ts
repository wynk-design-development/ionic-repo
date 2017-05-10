import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Firebase
import { AngularFire } from 'angularfire2';

//pages
import { Login } from '../login/login';
import { Roster } from '../roster/roster';
import { Schedule } from '../schedule/schedule';
import { Workouts } from '../workouts/workouts';
import { Profile } from '../profile/profile';
import { Drills } from '../drills/drills';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
	public pageTitle = 'Home';

 	constructor(
 		public navCtrl: NavController,
 		public af: AngularFire
 	) {
		// check if user is signed in
		this.af.auth.subscribe(auth => {
			if (auth) {
				console.log(auth.uid);
			}
		});
 	} //constructor



    public logout() {
        this.af.auth.logout().then(auth => {
            if (!auth) {
                this.navCtrl.setRoot( Login );
            }
        });
    } //logout



	goTo(value){
		switch(value){
			case 'Roster':
			this.navCtrl.push(Roster);
			break;
			case 'Schedule':
			this.navCtrl.push(Schedule);
			break;
			case 'Workouts':
			this.navCtrl.push(Workouts);
			break;
			case 'Profile':
			this.navCtrl.push(Profile);
			break;
			case 'Drills':
			this.navCtrl.push(Drills);
			break;
		}
	} //goTo
}
