const googleDirections = (homeAddress, schoolAddress, transitMode, callback) => {
  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = new window.google.maps.LatLng(schoolAddress.Location.Lat, schoolAddress.Location.Lng );

  let service = new window.google.maps.DirectionsService();
  service.route(
    {
      origin: origin,
      destination: destinations,
      travelMode: transitMode,
      unitSystem: window.google.maps.UnitSystem.IMPERIAL
    }, callback)
}

export default googleDirections;
