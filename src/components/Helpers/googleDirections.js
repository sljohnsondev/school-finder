const googleDirections = (homeAddress, schoolAddress, transitMode, callback) => {
  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = new window.google.maps.LatLng(schoolAddress.Location.Lat, schoolAddress.Location.Lng );

  let request = {
    origin: origin,
    destination: destinations,
    travelMode: transitMode,
    departureTime: 1505309500,
    unitSystem: window.google.maps.UnitSystem.IMPERIAL
  }
  let service = new window.google.maps.DirectionsService();

  service.route(request, callback)
}

export default googleDirections;
