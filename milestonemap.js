function initialize() {
  var louisianaCoast = new google.maps.LatLng(29.774189,-92.060160)
  var mapOptions = {
    zoom: 8,
    center: louisianaCoast,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(
      document.getElementById("map_canvas"),
      mapOptions);
}
