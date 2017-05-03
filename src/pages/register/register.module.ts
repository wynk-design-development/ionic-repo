import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Register } from './register';

@NgModule({
  declarations: [
    Register,
  ],
  imports: [
    IonicModule.forRoot(Register),
  ],
  exports: [
    Register
  ]
})
export class RegisterModule {}
