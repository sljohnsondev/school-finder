import moment from 'moment'

const googleDirections = (homeAddress, schoolAddress, transitMode, callback) => {
  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = new window.google.maps.LatLng(schoolAddress.location_lat, schoolAddress.location_lng );
  let departTime = new Date(moment().startOf('isoWeek').add(1, 'week').add(7.5, 'hours').valueOf())

  let request = {
    origin: origin,
    destination: destinations,
    travelMode: transitMode,
    transitOptions: {departureTime: departTime },
    unitSystem: window.google.maps.UnitSystem.IMPERIAL
  }
  let service = new window.google.maps.DirectionsService();

  service.route(request, callback)
}

export default googleDirections;
