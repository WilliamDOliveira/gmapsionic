import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectionPage } from './direction';
import { AgmCoreModule } from '@agm/core';

//https://angular-maps.com/

@NgModule({
  declarations: [
    DirectionPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectionPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBydpsnPgi88rSMNP7zl3cfwHWetH66b90'
    })
  ],
})
export class DirectionPageModule {}
