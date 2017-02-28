const googleDistanceMatrix = (homeAddress, schoolData, callback) => {
  let schools = schoolData;
  let origin = new window.google.maps.LatLng(homeAddress.Location.Lat, homeAddress.Location.Lng );
  let destinations = schoolData.map((school, i) => {
    return `${school.Address}, Denver, CO`
  })

  let service = new window.google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: destinations,
      travelMode: 'DRIVING'
    }, callback)
}

export default googleDistanceMatrix;
