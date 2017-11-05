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

export const addFavorite = (SchoolData) => {
  return {
    type: 'ADD_FAVORITE',
    SchoolData
  }
}

export const removeFavorite = id => {
  return {
    type: 'REMOVE_FAVORITE',
    id
  }
}

export const storeUser = user => {
  return {
    type: 'PUSH_USER',
    user
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
    .then(data => data)
  }
}

export const getUserFavorites = (userId) => {
	return dispatch => {
		fetch(`/api/v1/favorites/${userId}`)
			.then(data => data.json())
			.then(data => dispatch(addFavorite(data)))
	}
}

export const getUser = (oId, userInfo) => {
  return dispatch => {
    fetch(`/api/v1/users/${oId}`)
    .then( response => response.json())
    .then( data => {
      
        if (data.error) {
          return dispatch(createUser(userInfo))
        }
      dispatch(getUserFavorites(data[0].id))
      return dispatch(storeUser(data))
    })
  }
}

export const makeFavorite = (schoolInfo, stateFavorites) => {
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
      .then(data => {
        console.log('data in makefav action ', data);
        
        dispatch(addFavorite(data))})
	}
}

export const deleteFavorite = id => {
  return dispatch => {
    fetch(`/api/v1/favorites/${id}`, {
    method: 'DELETE'
    })
    .then( school => {
      console.log('return from delete ', school);
      
      dispatch(removeFavorite(school))
    }
    )
  }
}
