
exports.seed = function(knex, Promise) {
  return knex('sf_favorites').del()
    .then(() => knex('sf_users').del())

    .then(() => {
      return Promise.all([

        knex('sf_users').insert({
          username: 'Dan Alvarez',
          email: 'dan@dan.com',
          address: '1331 17th'
        }, 'id')
        .then(sf_user => {
          return knex('sf_favorites').insert([
            {
              favorite_name: 'East High School',
              favorite_id: '548',
              favorite_code: '2398',
              user_id: sf_user[0]
            },
            {
              favorite_name: 'GW',
              favorite_id: '561',
              favorite_code: '3378',
              user_id: sf_user[0]
            }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
