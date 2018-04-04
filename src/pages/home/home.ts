import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // API Nativa JS GOOGLE
  //https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple?hl=pt-br


  // Blog
  // https://blog.cloudboost.io/integrating-google-maps-in-angular-5-ca5f68009f29

  latitude:number;
  longitude:number;

  setCenter(e:any){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  constructor(public navCtrl: NavController) {  }


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
}

//link para outra page
linkPage(page){
  this.navCtrl.push(page);
}

}
