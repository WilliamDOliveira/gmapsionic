import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestewithcomponentPage } from './testewithcomponent';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TestewithcomponentPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TestewithcomponentPage),
  ],
})
export class TestewithcomponentPageModule {}
