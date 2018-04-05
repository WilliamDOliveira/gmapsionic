import { Component } from '@angular/core';

/**
 * Generated class for the GmapsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gmaps',
  templateUrl: 'gmaps.html'
})
export class GmapsComponent {

  text: string;

  constructor() {
    console.log('Hello GmapsComponent Component');
    this.text = 'Hello World';
  }

}
