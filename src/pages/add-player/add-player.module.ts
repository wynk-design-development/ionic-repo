import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddPlayer } from './add-player';

@NgModule({
  declarations: [
    AddPlayer,
  ],
  imports: [
    IonicModule.forRoot(AddPlayer),
  ],
  exports: [
    AddPlayer
  ]
})
export class AddPlayerModule {}
