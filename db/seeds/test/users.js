
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
    .then(() => knex('users').del())

    .then(() => {
      return Promise.all([

        knex('users').insert({
          id: 1,
          username: 'Dan Alvarez',
          email: 'dan@dan.com',
          street_address: '1331 17th',
          oath_id: '1'
        }, 'id')
        .then(user => {
          return knex('favorites').insert([
            {
              id: 1,
              school_name: 'East High School',
              school_address: '1600 City Park Esplanade',
              school_website: 'http://east.dpsk12.org',
              school_id: '548',
              school_code: '2398',
              user_id: 1,
              commute_time: '20 min',
              commute_distance: '15 miles',
              commute_type: 'WALKING'
            },
            {
              id: 2,
              school_name: 'George Washington High School',
              school_address: '655 S. Monaco Parkway',
              school_website: 'http://gwhs.dpsk12.org',
              school_id: '561',
              school_code: '3378',
              user_id: 1,
              commute_time: '20 min',
              commute_distance: '15 miles',
              commute_type: 'WALKING'
            }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
