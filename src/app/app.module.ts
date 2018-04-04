import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DirectionPageModule } from '../pages/direction/direction.module';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { TwopointsPageModule } from '../pages/twopoints/twopoints.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
    DirectionPageModule,
    TwopointsPageModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBydpsnPgi88rSMNP7zl3cfwHWetH66b90'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
