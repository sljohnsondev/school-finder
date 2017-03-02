const googleDistanceMatrix = (homeAddress, schoolData, transitMode , callback) => {
  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = schoolData.map((school, i) => {
    return `${school.Address}, Denver, CO`
  })

  let service = new window.google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: destinations,
      travelMode: transitMode,
      unitSystem: window.google.maps.UnitSystem.IMPERIAL
    }, callback)
}

export default googleDistanceMatrix;
