
const getGeoLocation = (address, callback, google) => {

  const geocoder = new google.maps.Geocoder();
  const formattedAddress = `${address}, Denver, CO`;

  let coords;
  let placeID;

  geocoder.geocode({address: formattedAddress}, (results, status) => {
    let coords_obj = results[0].geometry.location;
    coords = {lat: coords_obj.lat(), lng: coords_obj.lng()};
    placeID = results[0].place_id;
    callback({coords: coords, id: placeID});
  })
}

export default getGeoLocation;
