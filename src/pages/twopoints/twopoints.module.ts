import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwopointsPage } from './twopoints';

@NgModule({
  declarations: [
    TwopointsPage,
  ],
  imports: [
    IonicPageModule.forChild(TwopointsPage),
  ],
})
export class TwopointsPageModule {}
