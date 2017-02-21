import reducer from '../../src/reducers/settings-reducer'
import settings from '../../src/reducers/settings-reducer'
import app from '../../src/reducers/app-reducer'

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })

describe('settings reducer', () => {

  it('should accept action RECEIVE_FORECAST', () => {
      const action = {
        type: 'RECEIVE_FORECAST',
        forecastData: 'Sam is good at testing'
      };
      expect(settings([], action)).toEqual(['Sam is good at testing']);
    });

  it('should accept action RECIEVE_EXTENDED', () => {
      const action = {
        type: 'RECEIVE_EXTENDED',
        extForecast: []
      };
      expect(settings([], action)).toEqual([]);
  });

  it('should accept action REMOVE_PIN', () => {
      const action = {
        type: 'REMOVE_PIN',
        pinID: []
      };
      expect(settings([], action)).toEqual([]);
  });
})

describe('app reducer', () => {

  it('should return the initial state', ()=> {
    expect(reducer(undefined, [])).toEqual([])
  })

  it('should accept action FETCH_LOCATION', ()=> {
    const action =  {
      type:"FETCH_LOCATION",
      data:'fake data'
    }
    expect(app([], action)).toEqual('fake data')
  })

  it('should accept action FETCH_SUN', () => {
      const action = {
        type: 'FETCH_SUN',
        time: [0, 1, 2]
      };
    expect(app([], action)).toEqual({"0": 0, "1": 1, "2": 2});
  });

    it('should accept action FETCH_WEATHER', () => {
        const action = {
          type: 'FETCH_WEATHER',
          location: 'Denver'
        };
        expect(app([], action)).toEqual({"0": "D", "1": "e", "2": "n", "3": "v", "4": "e", "5": "r"});
    });
})
})
