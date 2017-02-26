
const getGeoLocation = (address, callback, google) => {

  const geocoder = new google.maps.Geocoder();
  const formattedAddress = `${address}, Denver, CO`;

  let coords;

  geocoder.geocode({address: formattedAddress}, (results, status) => {
    let coords_obj = results[0].geometry.location;
    coords = {lat: coords_obj.lat(), lng: coords_obj.lng()};
    callback({location: coords});
  })
}

export default getGeoLocation;

// placeID = results[0].place_id;
