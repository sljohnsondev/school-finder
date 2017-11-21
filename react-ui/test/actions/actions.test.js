import * as actions from '../../src/actions';
import fetchMock from 'fetch-mock';

describe('actions', () => {

  const schoolResults = [
    {
      school_name: 'East High School',
      school_address: '1600 City Park Esplanade',
      school_website: 'http://east.dpsk12.org',
      school_id: '548',
      school_code: '2398'
    },
    {
      school_name: 'George Washington High School',
      school_address: '655 S. Monaco Parkway',
      school_website: 'http://gwhs.dpsk12.org',
      school_id: '561',
      school_code: '3378'
    }
  ];
  const commuteTime = '17 min';
  const commuteDistance = '17 miles';

  it('should be able to take a user and sign them in', () => {
    const user = 'dan';
    const expectedAction = {
      type: 'SIGN_IN',
      user
    }
    expect(actions.signInHandler(user)).toEqual(expectedAction);
  });

  it('should return an array of schools based on distance and time parameters', () => {
    const expectedAction = {
      type: 'SET_SCHOOLS',
      schoolResults,
      commuteTime,
      commuteDistance
    };
    expect(actions.setSchools(schoolResults, commuteTime, commuteDistance)).toEqual(expectedAction);
  });

  it('should be able to clear the schools array', () => {
    const expectedAction = {
      type: 'CLEAR_SCHOOLS'
    }
    expect(actions.clearSchools()).toEqual(expectedAction);
  });

  it('should be able to set the home address', () => {
    const homeAddress = '1234 Fake St.';
    const expectedAction = {
      type: 'SET_HOME_ADDRESS',
      homeAddress
    }
    expect(actions.setHomeAddress(homeAddress)).toEqual(expectedAction);
  });

  it('should be able to set the direstions', () => {
    const directions = 'Left, then right, then left... right?';
    const expectedAction = {
      type: 'SET_DIRECTIONS',
      directions
    }
    expect(actions.setDirections(directions)).toEqual(expectedAction);
  });

  it('should be able to clear the directions', () => {
    const expectedAction = {
      type: 'CLEAR_DIRECTIONS'
    }
    expect(actions.clearDirections()).toEqual(expectedAction);
  });

  it('should be able to toggle the window information', () => {
    const targetMarker = {schools: schoolResults};
    const expectedAction = {
      type: 'TOGGLE_INFOWINDOW',
      targetMarker
    }
    expect(actions.toggleInfoWindow(targetMarker)).toEqual(expectedAction);
  });

  it('should be able to add a favorite ', () => {
    const SchoolData = 14;
    const expectedAction = {
      type: 'ADD_FAVORITE',
      SchoolData
    }
    expect(actions.addFavorite(SchoolData)).toEqual(expectedAction);
  });

  it('should be able to push a user into storage', () => {
    const user = 'dan';
    const expectedAction = {
      type: 'PUSH_USER',
      user
    }
    expect(actions.storeUser(user)).toEqual(expectedAction);
  });

  describe('the fetches', () => {
    const mockUser = {
      id: 1,
      username: 'Dan Alvarez',
      email: 'dan@dan.com',
      street_address: '1331 17th',
      oath_id: '1'
    };

    const mockFavorites = [
      {
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
    ];

    const mockFavorite = {
      id: 4,
      school_name: 'East High School',
      school_address: '1600 City Park Esplanade',
      school_website: 'http://east.dpsk12.org',
      school_id: '548',
      school_code: '2398',
      user_id: 1,
      commute_time: '20 min',
      commute_distance: '15 miles',
      commute_type: 'WALKING'
    };

    it('should be able to fetch a user', () => {
      fetchMock.get('/api/v1/users/1', {
        status: 200,
        body: mockUser,
      })
      actions.getUser(1, 1)()
      expect(fetchMock.routes[0].method).toEqual('GET');
      expect(fetchMock.routes[0].response.body).toEqual(mockUser);
      expect(fetchMock.lastUrl()).toEqual('/api/v1/users/1');
    });

    it('should be able to create a user', () => {
      fetchMock.post('/api/v1/users', {
        status: 201,
        body: mockUser,
      })
      actions.createUser(mockUser)()
      expect(fetchMock.routes[1].method).toEqual('POST');
      expect(fetchMock.routes[1].response.body).toEqual(mockUser);
      expect(fetchMock.lastUrl()).toEqual('/api/v1/users');
    });

    it('should be able to fetch favorite schools based on a user id', () => {
      fetchMock.get('/api/v1/favorites/1', {
        status: 200,
        body: mockFavorites
      })
      actions.getUserFavorites(mockUser.id)()
      expect(fetchMock.routes[2].method).toEqual('GET');
      expect(fetchMock.routes[2].response.body).toEqual(mockFavorites);
      expect(fetchMock.lastUrl()).toEqual('/api/v1/favorites/1');
    });

    it('should be able to create a favorite in the db', () => {
      fetchMock.post('/api/v1/favorites', {
        status: 201,
        body: mockFavorite,
      })
      // setImplementations(require('makeFavorite')(mockFavorite))
      actions.makeFavorite(mockFavorite)
      expect(fetchMock.routes[3].method).toEqual('POST');
      // expect(fetchMock.routes[3].response.body).toEqual(mockFavorite.id);
      // expect(fetchMock.lastUrl()).toEqual('/api/v1/favorites');
    });



  });

});
