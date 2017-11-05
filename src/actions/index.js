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

export const addFavorite = (id) => {
  return {
    type: 'ADD_FAVORITE',
    id
  }
}

export const getAllUsers = (oId) => {
  return dispatch => {
    fetch('/api/v1/users')
    .then( response => response.json())
    .then( data => console.log('user? ', data.includes(oId)))
  }
}

export const createUser = (userInfo) => {
  return dispatch => {
    fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.ok ? response.json() : console.log('error message', response)
    })
    .then(data => { console.log('made user ', data)
    })
  }
}

export const getUserFavorites = (userId) => {

	return dispatch => {
		fetch(`/api/v1/favorites/${userId}`)
			.then(data => data.json())
			.then(data => console.log('favorites in action ', data))
	}
}

export const makeFavorite = (schoolInfo) => {
	return dispatch => {
		fetch('/api/v1/favorites/', {
			method: 'POST',
			body: JSON.stringify(schoolInfo),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(data => {
				return data.ok ? data.json() : alert('error message')
			})
			.then(data => { console.log('made favorite ', data)
			})
	}
}
