const googleDistanceMatrix = (homeAddress, schoolData, transitMode , callback) => {

  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = schoolData.map((school, i) => {
    return `${school.Address}, Denver, CO`
  })
  let service = new window.google.maps.DistanceMatrixService();

  if (destinations.length > 25) {
    //function to handle more than 25 locations
    console.log('Too many destinations')
  } else {
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: destinations,
        travelMode: transitMode,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      }, callback)
  }
}

export default googleDistanceMatrix;
