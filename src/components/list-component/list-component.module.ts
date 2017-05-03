import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListComponent } from './list-component';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    IonicModule.forRoot(ListComponent),
  ],
  exports: [
    ListComponent
  ]
})
export class ListComponentModule {}
