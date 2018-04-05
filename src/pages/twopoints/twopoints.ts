import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from '@types/googlemaps';


// Api exemplos
// https://developers.google.com/maps/documentation/javascript/examples/
// Api places
// https://developers.google.com/maps/documentation/javascript/reference/3.exp/places-widget

@IonicPage()
@Component({
  selector: 'page-twopoints',
  templateUrl: 'twopoints.html',
})
export class TwopointsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    // // Google Places API auto complete
    // let input:HTMLInputElement = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
    // let autocomplete = new window['google'].maps.places.Autocomplete(input, {types: ['geocode']}) ;
    // google.maps.event.addListener(autocomplete, 'place_changed', () => {
    //   // retrieve the place object for your use
    //   let place = autocomplete.getPlace();
    // });
 }

  ionViewDidLoad() {
    this.initMap();
    console.log('address: ', this.address);
  }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  directionsService: any;
  directionsDisplay: any;

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(-23.4527866, -47.45688)
    });
    this.directionsDisplay.setMap(this.map);//render

    // document.getElementById('start').addEventListener('change', onChangeHandler);
    // document.getElementById('end').addEventListener('change', onChangeHandler);
    let infowindow = new google.maps.InfoWindow();

    //https://developers.google.com/maps/documentation/javascript/markers
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.4527866, -47.45688),
      map: this.map,
      title: 'Reunião',
      // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });


  }

  onChangeHandler() {
    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
  };


  @ViewChild('address') address: HTMLInputElement;
  autocomplete: any;

  major(evt) {
    console.log('evt: ', evt);
    console.log('evt trg: ', evt.target.value);
    if (evt.target.value.length >= 3) {
      console.log('this.address: ', this);
      this.autocomplete = new google.maps.places.Autocomplete((<HTMLInputElement>evt.target));
      console.log('autocomplete: ', this.autocomplete );
      this.autocomplete.bindTo('bounds', this.map);
      this.map.setCenter( new google.maps.LatLng(-23.1521866, -47.15888) );
      // let points = this.autocomplete.getBounds();
      // let points = this.autocomplete.setBounds( this.autocomplete.getBounds() );
      // console.log('points: ', points);
      // console.log('points: ', typeof points);
    }

  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: new google.maps.LatLng(-23.4527866, -47.45688),
      destination: new google.maps.LatLng(-23.5031313, -47.5006966),
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


}
