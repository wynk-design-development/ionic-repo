import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, AlertController, ActionSheetController } from 'ionic-angular';

// Firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html'
})



export class ListComponent {
    @Output() edit = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() add = new EventEmitter();
    @Input() list:Array<any>;

    constructor() {}



    public addItem(item) {
      this.add.emit(item);
    }

    public removeItem(item) {
      this.remove.emit(item);
    }

    public editItem(item) {
        this.edit.emit(item);
    }
}
