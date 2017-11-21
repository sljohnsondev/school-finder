const googleDistanceMatrix = (homeAddress, schoolData, transitMode, callback) => {
  const origin =
    /* eslint-disable no-alert, no-undef */
    new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng);
    /* eslint-enable no-alert, no-undef */
  const destinations = schoolData.map((school, i) => (
    `${school.address}, Denver, CO`
  ));

  const service =
    /* eslint-disable no-alert, no-undef */
    new window.google.maps.DistanceMatrixService();
    /* eslint-enable no-alert, no-undef */

  service.getDistanceMatrix({
    origins: [origin],
    destinations: destinations,
    travelMode: transitMode,
    /* eslint-disable no-alert, no-undef */
    unitSystem: window.google.maps.UnitSystem.IMPERIAL,
    /* eslint-enable no-alert, no-undef */
  }, callback);
};

export default googleDistanceMatrix;
