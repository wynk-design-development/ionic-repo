import { Component } from '@angular/core';
import { IonicPage, AlertController, ActionSheetController } from 'ionic-angular';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html'
})



export class ListComponent {
    drills: FirebaseListObservable<any>;
    uid: string;

    constructor(
        private alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public af: AngularFire
    ) {
        this.af.auth.subscribe(auth => {
          if ( auth ) {
            this.uid = auth.uid;
            this.drills = af.database.list('/drills/'+this.uid);
          }
        });
    }



    addDrill() {
      let prompt = this.alertCtrl.create({
        title: 'Drill Name',
        message: "Enter a name for this new song you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title',
          },
          {
            type: 'type',
            placeholder: 'Type'
          },
          {
            type: 'link',
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
                type: data[1],
                link: data[2]
              });
            }
          }
        ]
      });
      prompt.present();
    } //addDrill



    showOptions(drillId, drillTitle, drillType, drillLink) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'What do you want to do?',
        buttons: [
          {
            text: 'Delete Drill',
            role: 'destructive',
            handler: () => {
              this.removeDrill(drillId);
            }
          }, {
            text: 'Update title',
            handler: () => {
              this.updateDrill(drillId, drillTitle, drillType, drillLink)
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } //showOptions



    removeDrill(drillId: string){
        this.drills.remove(drillId);
    } //removeDrill



    updateDrill(drillId, drillTitle, drillType, drillLink){
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
                    type: data[1],
                    link: data[2]
                  });
                }
              }
            ]
        });
        prompt.present();
    } //updateDrill
}
