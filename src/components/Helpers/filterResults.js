const filterResults = (schoolData, time, distance) => {
  let results = schoolData.filter((school) => {
    return school.commute.distance.value <= distance * 1609.35 && school.commute.time.value <= time * 60;
  })

  return results.filter((n) => { return n !== undefined })
    .sort((a, b) => { return a.commute.time.value - b.commute.time.value; })
}

export default filterResults;
