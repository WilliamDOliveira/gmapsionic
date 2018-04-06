import { Component, ViewChild, ElementRef } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'gmaps',
  templateUrl: 'gmaps.html'
})
export class GmapsComponent {

  @ViewChild('gmap') gmaps: any;
  map: google.maps.Map;

  constructor() {

    // searchBox.addListener('places_changed', function() {
    //   var places = searchBox.getPlaces();

    //   if (places.length == 0) {
    //     return;
    //   }

    //   // Clear out the old markers.
    //   markers.forEach(function(marker) {
    //     marker.setMap(null);
    //   });
    //   markers = [];

    //   // For each place, get the icon, name and location.
    //   var bounds = new google.maps.LatLngBounds();
    //   places.forEach(function(place) {
    //     if (!place.geometry) {
    //       console.log("Returned place contains no geometry");
    //       return;
    //     }
    //     var icon = {
    //       url: place.icon,
    //       size: new google.maps.Size(71, 71),
    //       origin: new google.maps.Point(0, 0),
    //       anchor: new google.maps.Point(17, 34),
    //       scaledSize: new google.maps.Size(25, 25)
    //     };

    //     // Create a marker for each place.
    //     markers.push(new google.maps.Marker({
    //       map: map,
    //       icon: icon,
    //       title: place.name,
    //       position: place.geometry.location
    //     }));

    //     if (place.geometry.viewport) {
    //       // Only geocodes have viewport.
    //       bounds.union(place.geometry.viewport);
    //     } else {
    //       bounds.extend(place.geometry.location);
    //     }
    //   });
    //   map.fitBounds(bounds);
    // });


  }

  ngAfterViewInit() {
    console.log('map: ', this.gmaps);
    this.createAndUpdateMap(-23.4527866, -47.45688)
      .then(mapa => console.log('mapa init'))
      .catch(e => console.log('mapa error init'))

  }


  //-23.4527866, -47.45688
  createAndUpdateMap(lat, lgn) {
    return new Promise<any>((resolve, reject) => {
      try {
        let mapProp = {
          center: new google.maps.LatLng(lat, lgn),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map((<ElementRef>this.gmaps).nativeElement, mapProp);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lgn),
          map: this.map,
        });
        resolve(true);
      } catch (e) {
        console.error('createAndUpdateMap', e);
        reject(e);
      }
    })//[&nd<Promise>]
  }


  @ViewChild('address') address: HTMLInputElement;
  autocomplete: any;
  // https://developers.google.com/maps/documentation/javascript/places?hl=pt-br#place_searches
  // https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br#AutocompleteService
  // https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br#LatLngBounds
  major(evt) {
    console.log('evt: ', evt);
    console.log('evt trg: ', evt.target.value);
    if (evt.target.value.length >= 3) {
      console.log('this.address: ', this);
      // var autoCompleteOpcoes = new google.maps.LatLngBounds();
      var autoCompleteOpcoes = {
        types: ['geocode']
      }
      //https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=pt-br
      this.autocomplete = new google.maps.places.Autocomplete((<HTMLInputElement>evt.target) , autoCompleteOpcoes  );
      console.log('autocomplete: ', this.autocomplete    );

      var searchBox = new google.maps.places.SearchBox( (<HTMLInputElement>evt.target));
      console.log('searchBox: ', searchBox);



      // console.log('autocomplete: ', this.autocomplete.getCenter().lat() );
      // console.log('autocomplete: ', this.autocomplete.getCenter().lng() );
      // let autocompleteOpt = this.autocomplete.AutocompleteOptions(this.autocomplete);
      // console.log('autocompleteOpt: ', autocompleteOpt );
      // console.log('autocomplete: ', this.autocomplete.getPlace() );
      // console.log('autocomplete: ', this.autocomplete.getDetails() );




      // let place = this.autocomplete.getPlace();
      //     if (!place.geometry) {
      //       // User entered the name of a Place that was not suggested and
      //       // pressed the Enter key, or the Place Details request failed.
      //       window.alert("No details available for input: '" + place.name + "'");
      //       return;
      //     }

      //     // If the place has a geometry, then present it on a map.
      //     if (place.geometry.viewport) {
      //       this.gmaps.fitBounds(place.geometry.viewport);
      //     } else {
      //       this.gmaps.setCenter(place.geometry.location);
      //       this.gmaps.setZoom(17);  // Why 17? Because it looks good.
      //     }
      // console.log('place: ', place.name);
      // console.log('lat',place.geometry.location.lat());
      // place.geometry.location.lat();
      // console.log('lat',place.geometry.location.lng());
      // place.geometry.location.lng();

      // this.autocomplete.bindTo('bounds', this.map);
      // this.map.setCenter( new google.maps.LatLng(-23.1521866, -47.15888) );
      // let points = this.autocomplete.getBounds();
      // let points = this.autocomplete.setBounds( this.autocomplete.getBounds() );
      // console.log('points: ', points);
      // console.log('points: ', typeof points);
    }
  }

}
