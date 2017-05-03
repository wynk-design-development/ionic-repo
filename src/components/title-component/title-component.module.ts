import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TitleComponent } from './title-component';

@NgModule({
  declarations: [
    TitleComponent,
  ],
  imports: [
    IonicModule.forRoot(TitleComponent),
  ],
  exports: [
    TitleComponent
  ]
})
export class TitleComponentModule {}
