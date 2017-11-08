import React, { Component } from 'react';
import './FavoriteButton.css';
import heart from '../../assets/heart.svg';
import fav from '../../assets/like.svg'

class favoriteButton extends Component {
  constructor() {
    super()
    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
    for (let i = 0; i < this.props.favorites.length; i++) {
      if ( this.props.favorites[i].school_code === this.props.schoolInfo.dps_school_code ) {
        this.setState({
          isFavorite: true
        })
      }
    }
  }

  isFavorite() {
    let favIDs = []
    this.props.favorites.forEach(fav => favIDs.push(fav.school_code))
    if (favIDs.includes(this.props.schoolInfo.dps_school_code)) {
      return true;
    } else return false;
  }

  render () {
    const { schoolInfo, commuteInfo, userId, deleteFavorite, makeFavorite, commuteType } = this.props
    let schoolData = {};

    if (commuteInfo) {
      schoolData = {
        school_id: schoolInfo.id,
        school_address: schoolInfo.address,
        school_website: schoolInfo.website,
        school_name: schoolInfo.name,
        school_code: schoolInfo.dps_school_code,
        commute_time: commuteInfo.time.text,
        commute_distance: commuteInfo.distance.text,
        commute_type: commuteType,
        user_id: userId
      }
    }



    console.log('FAVS BUTTONS ', this.props.favorites)
    return (
      <div>
        { this.isFavorite() ?
          <img src={fav} alt='favorite' className='add-favorite' onClick={ () => deleteFavorite(schoolInfo.dps_school_code) } />
          :
          <img src={heart} alt='favorite' className='add-favorite' onClick={ () => makeFavorite(schoolData) } />
        }
      </div>
    )
  }
};

export default favoriteButton;
