const filterResults = (schoolData, time, distance) => {
  let result = schoolData.map((school, i) => {
    if (school.commute.distance.value <= distance * 1609.35 && school.commute.time.value <= time * 60) {
      return Object.assign({}, school)
    }
  })
  return result.filter(function(n){ return n != undefined })
}



export default filterResults;
