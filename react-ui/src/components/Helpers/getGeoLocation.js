
const getGeoLocation = (address, callback) => {
  /* eslint-disable no-alert, no-undef */
  const geocoder = new window.google.maps.Geocoder();
  /* eslint-enable no-alert, no-undef */
  const formattedAddress = `${address}, Denver, CO`;

  geocoder.geocode({ address: formattedAddress }, (results, status) => {
    const coords_obj = results[0].geometry.location;
    const coords = { Lat: coords_obj.lat(), Lng: coords_obj.lng() };
    callback({ Location: coords }, address);
  });
};

export default getGeoLocation;
