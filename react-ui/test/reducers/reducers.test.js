import app from '../../src/reducers/app-reducer';
import filters from '../../src/reducers/filters-reducer';
import profile from '../../src/reducers/profile-reducer';
import favorites from '../../src/reducers/favorite-button-reducer';

describe('todos reducer', () => {
  const mockSignInInfo = {
    username: 'Danman',
    email: 'dan@dan.com',
    street_address: '12345 St.',
    oath_id: '1',
  };

  const mockSchoolInfo = {
    school_name: 'East High School',
    school_address: '1600 City Park Esplanade',
    school_website: 'http://east.dpsk12.org',
    school_id: '548',
    school_code: '2398',
  };

  const mockHomeAddressInfo = { homeAddress: '1234 Fake St.' };

  const mockWindowInfo = {
    schools: [
      {
        school_name: 'East High School',
        school_address: '1600 City Park Esplanade',
        school_website: 'http://east.dpsk12.org',
        school_id: '548',
        school_code: '2398',
      },
      {
        school_name: 'George Washington High School',
        school_address: '655 S. Monaco Parkway',
        school_website: 'http://gwhs.dpsk12.org',
        school_id: '561',
        school_code: '3378',
      },
    ],
  };

  const mockSearchInfo = { activeSearch: true };

  const mockSignInAction = {
    type: 'SIGN_IN',
    data: mockSignInInfo,
  };

  const mockSetSchoolAction = {
    type: 'SET_SCHOOLS',
    data: mockSchoolInfo,
  };

  const mockClearSchoolAction = {
    type: 'CLEAR_SCHOOLS',
    data: [],
  };

  const mockSetHomeAddressAction = {
    type: 'SET_HOME_ADDRESS',
    data: mockHomeAddressInfo,
  };

  const mockClearAddressAction = {
    type: 'CLEAR_DIRECTIONS',
    data: {},
  };

  const mockInfoWindowAction = {
    type: 'TOGGLE_INFOWINDOW',
    data: mockWindowInfo,
  };

  const mockActiveSearchAction = {
    type: 'ACTIVE_SEARCH',
    data: mockSearchInfo,
  };

  const mockPushUserAction = {
    type: 'PUSH_USER',
    data: mockSignInInfo,
  };

  const mockFavoritesAction = {
    type: 'ADD_FAVORITE',
    data: mockWindowInfo,
  };

  const state = {};

  describe('app reducer', () => {
    it('should start with nothing in store', () => {
      expect(app(undefined, {})).toEqual([]);
    });

    it('should not do anything when other reducers fire', () => {
      expect(app(state, mockSetSchoolAction.type)).toEqual({});
    });

    it('should sign in the user information', () => {
      expect(app(mockSignInAction.data, mockSignInAction.type)).toEqual(mockSignInInfo);
    });
  });

  describe('filter reducer', () => {
    it('should start with nothing in store', () => {
      expect(filters(undefined, {})).toEqual([]);
    });

    it('should not do anything when other reducers fire', () => {
      expect(filters(state, mockSignInAction.type)).toEqual({});
    });

    it('should user information', () => {
      expect(filters(mockSetSchoolAction.data, mockSetSchoolAction.type)).toEqual(mockSchoolInfo);
    });

    it('should be able to clear the schools data', () => {
      expect(filters(mockClearSchoolAction.data, mockClearSchoolAction.type)).toEqual([]);
    });

    it('should be able to set the user/s home address', () => {
      expect(filters(mockSetHomeAddressAction.data, mockSetHomeAddressAction.type))
        .toEqual(mockHomeAddressInfo);
    });

    it('should be able to clear the directions', () => {
      expect(filters(mockClearAddressAction.data, mockClearAddressAction.type)).toEqual({});
    });

    it('should be able to display an array of schools', () => {
      expect(filters(mockInfoWindowAction.data, mockInfoWindowAction.type)).toEqual(mockWindowInfo);
    });

    it('should know whether you are actively searching or not', () => {
      expect(filters(mockActiveSearchAction.data, mockActiveSearchAction.type))
        .toEqual(mockSearchInfo);
    });
  });

  describe('profile reducer', () => {
    it('should start with nothing in store', () => {
      expect(profile(undefined, {})).toEqual({});
    });

    it('should not do anything when other reducers fire', () => {
      expect(profile(state, mockSetSchoolAction.type)).toEqual({});
    });

    it('should push the user information', () => {
      expect(profile(mockPushUserAction.data, mockPushUserAction.type)).toEqual(mockSignInInfo);
    });
  });

  describe('school card reducer', () => {
    it('should start with nothing in store', () => {
      expect(favorites(undefined, {})).toEqual([]);
    });

    it('should not do anything when other reducers fire', () => {
      expect(favorites(state, mockSetSchoolAction.type)).toEqual({});
    });

    it('should add a favorite', () => {
      expect(favorites(mockFavoritesAction.data, mockFavoritesAction.type)).toEqual(mockWindowInfo);
    });
  });
});
