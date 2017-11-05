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

export const storeUser = user => {
  return {
    type: 'PUSH_USER',
    user
  }
}

export const getUser = (oId) => {
  return dispatch => {
    fetch(`/api/v1/users/${oId}`)
    .then( response => response.json())
    .then( data => {
      console.log('data in getUser ', data);
      
      return dispatch(storeUser(data))
    })
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
