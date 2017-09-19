export const signInHandler = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
}

export const setSchools = (schoolResults, commuteTime, commuteDistance) => {
  return {
    type: 'SET_SCHOOLS',
    schoolResults,
    commuteTime,
    commuteDistance
  }
}

export const clearSchools = () => {
  return {
    type: 'CLEAR_SCHOOLS'
  }
}

export const setHomeAddress = (homeAddress) => {
  return {
    type: 'SET_HOME_ADDRESS',
    homeAddress
  }
}

export const setDirections = (directions) => {
  return {
    type: 'SET_DIRECTIONS',
    directions
  }
}

export const clearDirections = () => {
  return {
    type: 'CLEAR_DIRECTIONS'
  }
}

export const toggleInfoWindow = (targetMarker) => {
  return {
    type: 'TOGGLE_INFOWINDOW',
    targetMarker
  }
}

export const activeSearchToggle = () => {
  return {
    type: 'ACTIVE_SEARCH'
  }
}
