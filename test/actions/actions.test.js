import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to remove pin', () => {
    const forecastData = []
    const expectedAction = {
     type: 'RECEIVE_FORECAST',
     forecastData: []
    }
    expect(actions.receiveForecast(forecastData)).toEqual(expectedAction)
  })
  it('should create an action to fetch location', () => {
    const data = {}
    const expectedAction = {
     type: 'FETCH_LOCATION',
     data: {}
    }
    expect(actions.fetchLocation(data)).toEqual(expectedAction)
  })
  it('should create an action to fetch sun', () => {
    const time = {}
    const expectedAction = {
     type: 'FETCH_SUN',
     time: {}
    }
    expect(actions.fetchSun(time)).toEqual(expectedAction)
  })
  it('should create an action to fetch weather', () => {
    const location = []
    const expectedAction = {
     type: 'FETCH_WEATHER',
     location: []
    }
    expect(actions.fetchWeather(location)).toEqual(expectedAction)
  })
  it('should create an action to remove pin', () => {
    const pinID = []
    const expectedAction = {
     type: 'REMOVE_PIN',
     pinID: []
    }
    expect(actions.removePin(pinID)).toEqual(expectedAction)
  })
})
