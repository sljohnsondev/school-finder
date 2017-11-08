const filterResults = (schoolData, time, distance) => {
  const results = schoolData.filter(school => (
    school.commute.distance.value <= distance * 1609.35 && school.commute.time.value <= time * 60
  ));

  return results.filter(n => (n !== undefined))
    .sort((a, b) => (a.commute.time.value - b.commute.time.value));
};

export default filterResults;
