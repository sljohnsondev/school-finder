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

  render () {
    const { schoolInfo, commuteInfo, userId } = this.props
    console.log('commute Info', commuteInfo);
    
    const schoolData = {
      school_id: schoolInfo.id,
      school_address: schoolInfo.address,
      school_website: schoolInfo.website,
      school_name: schoolInfo.name,
      school_code: schoolInfo.dps_school_code,
      commute_time: commuteInfo.time.text,
      commute_distance: commuteInfo.distance.text,
      user_id: userId
    }
    
    return (
      <div>
        { this.state.isFavorite ?
          <img src={fav} alt='favorite' className='add-favorite' onClick={ () => this.props.deleteFavorite(this.props.schoolInfo.dps_school_code) } />
          :
          <img src={heart} alt='favorite' className='add-favorite' onClick={ () => this.props.makeFavorite(schoolData) } />
        }      
      </div>
    )
  }
};

export default favoriteButton;
