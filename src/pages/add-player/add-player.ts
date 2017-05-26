import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayer {

  public pageTitle: string = 'Add A New Player';
  public positions: Array<any> = ['Defensive Midfielder', 'GoalKeeper', 'Left Back', 'Left Midfielder', 'Sweeper'];

  public addPlayer: any = FormGroup;
  public date: any = new Date();
  public today: any = this.date.toISOString();

  private player: FirebaseListObservable<any>;
  private uid: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    public af: AngularFire) {

      this.addPlayer = builder.group({
        'name' : ['', Validators.compose([Validators.required])],
        'position' : ['', Validators.compose([Validators.required])],
        'email' : ['', Validators.compose([Validators.required])],
        'phone' : ['', Validators.compose([Validators.required])],
        'address' : ['', Validators.compose([Validators.required])],
        'about' : ['', Validators.compose([Validators.required])],
        'birthdate' : ['', Validators.compose([Validators.required])],
        'rank': [''],
        'picture': [''],
        'stats': builder.group([{
          'type': 'assists',
          'percentage': '75',
          'amount': '20'
        }]),
        'badges': builder.array([
          'test',
          'test'
        ])
      });

      this.af.auth.subscribe(auth => {
        if ( auth ) {
          console.log(auth)
          this.uid = auth.uid;
          this.player = af.database.list(this.uid+'/roster/');
        }
      });

  }

  saveNewPlayer(test){
    console.log(test);

    this.player.push(test);
  }

}
