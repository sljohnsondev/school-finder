// import app from '../../src/reducers/app-reducer';
import app from '../../src/reducers/app-reducer';
import filters from '../../src/reducers/filters-reducer.js'

describe('todos reducer', () => {

  const mockInfo = {
    username: 'Danman',
    email: 'dan@dan.com',
    street_address: '12345 St.',
    oath_id: '1'
  }

  const mockAction1 = {
    type: 'SIGN_IN',
    data: mockInfo
  };

  const mockAction2 = {
    type: 'FOOD_SEARCH',
    data: mockInfo
  };

  const state = {};

  it('should return the initial state', () => {
    expect( (undefined, {}) ).toEqual({})
  });

  it('should not do anything when other reducers fire', ()=> {
    expect(app(state, mockAction2.type)).toEqual({})
  });

  it('should user information', () => {
    expect(app(mockAction1.data, mockAction1.type)).toEqual(mockInfo)
  });


});
