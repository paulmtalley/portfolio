function initialize() {
  var newOrleans = new google.maps.LatLng(29.955646, -90.102900)
  var mapOptions = {
    zoom: 8,
    center: newOrleans,
    mapTypeId: google.maps.MapTypeId.ROADS,
    styles: [{"elementType": "geometry", "stylers": [{"color": "#f5f5f5"}]},
             {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
             {"elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},
             {"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f5f5"}]},
             {"featureType": "administrative.land_parcel", "stylers": [{"visibility": "off"}]},
             {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"}]},
             {"featureType": "administrative.neighborhood", "stylers": [{"visibility": "off"}]},
             {"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#ffdfb8"}]},
             {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
             {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
             {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
             {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#9dff93"}]},
             {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
             {"featureType": "road", "stylers": [{"visibility": "off"}]},
             {"featureType": "road","elementType": "geometry","stylers": [{"color": "#ffffff"}]},
             {"featureType": "road.arterial", "elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
             {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#dadada"}]},
             {"featureType": "road.highway", "elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
             {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
             {"featureType": "transit.line","stylers": [{"visibility": "off"}]},
             {"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},
             {"featureType": "transit.station","stylers": [{"visibility": "off"}]},
             {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},
             {"featureType": "water","elementType": "geometry","stylers": [{"color": "#c9c9c9"}]},
             {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#7a96ff"}]},
             {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]}
             ]
  };
  var map = new google.maps.Map(
      document.getElementById("deepdive1canvas"),
      mapOptions);
}
