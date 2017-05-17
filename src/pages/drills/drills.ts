import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@IonicPage()
@Component({
  selector: 'page-drills',
  templateUrl: 'drills.html',
})



export class Drills {
  private drills: FirebaseListObservable<any>;
  private uid: string;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public alertCtrl: AlertController,
    public af: AngularFire
  ) {
    this.af.auth.subscribe(auth => {
      if ( auth ) {
        this.uid = auth.uid;
        this.drills = af.database.list(this.uid+'/drills/');
        console.log('drills - ',this.drills);
      }
    });
  } //constructor



  public editDrill(drillId:string, drillTitle:string, drillType:string, drillLink:string) {
    let prompt = this.alertCtrl.create({
        title: 'Drill Name',
        message: "Update the name for this drill",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title',
            value: drillTitle
          },
          {
            name: 'type',
            placeholder: 'Type',
            value: drillType
          },
          {
            name: 'link',
            placeholder: 'Link',
            value: drillLink
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.drills.update(drillId, {
                title: data.title,
                type: data.type,
                link: data.link
              });
            }
          }
        ]
    });
    prompt.present();
  } //editDrill



  public addDrill() {
    let prompt = this.alertCtrl.create({
      title: 'Drill Name',
      message: "Enter a name for this new drill",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
        },
        {
          name: 'type',
          placeholder: 'Type'
        },
        {
          name: 'link',
          placeholder: 'Link'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data - ',data);
            this.drills.push({
              title: data.title,
              type: data.type,
              link: data.link
            });
          }
        }
      ]
    });
    prompt.present();
  } //addDrill



  public removeDrill(drillId: string){
      this.drills.remove(drillId);
  } //removeDrill



  ionViewDidLoad() {
    console.log('ionViewDidLoad Drills');
  }
}
