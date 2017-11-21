import moment from 'moment';

const googleDirections = (homeAddress, schoolAddress, transitMode, callback) => {
  /* eslint-disable no-alert, no-undef */
  const origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng);
  /* eslint-enable no-alert, no-undef */
  const destinations =
    /* eslint-disable no-alert, no-undef */
    new window.google.maps.LatLng(schoolAddress.location_lat, schoolAddress.location_lng);
    /* eslint-enable no-alert, no-undef */
  const departTime =
    new Date(moment().startOf('isoWeek').add(1, 'week').add(7.5, 'hours')
      .valueOf());

  const request = {
    origin: origin,
    destination: destinations,
    travelMode: transitMode,
    transitOptions: { departureTime: departTime },
    /* eslint-disable no-alert, no-undef */
    unitSystem: window.google.maps.UnitSystem.IMPERIAL,
    /* eslint-enable no-alert, no-undef */
  };
  /* eslint-disable no-alert, no-undef */
  const service = new window.google.maps.DirectionsService();
  /* eslint-enable no-alert, no-undef */

  service.route(request, callback);
};

export default googleDirections;
