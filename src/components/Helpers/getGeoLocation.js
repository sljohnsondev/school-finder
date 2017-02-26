
const getGeoLocation = (address, callback) => {

  const geocoder = new window.google.maps.Geocoder();
  const formattedAddress = `${address}, Denver, CO`;

  let coords;

  geocoder.geocode({address: formattedAddress}, (results, status) => {
    let coords_obj = results[0].geometry.location;
    coords = {Lat: coords_obj.lat(), Lng: coords_obj.lng()};
    callback({Location: coords});
  })
}

export default getGeoLocation;

// placeID = results[0].place_id;
