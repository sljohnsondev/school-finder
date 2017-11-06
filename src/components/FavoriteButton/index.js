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
    const schoolData = {
      school_id: this.props.schoolInfo.id,
      school_address: this.props.schoolInfo.address,
      school_website: this.props.schoolInfo.website,
      school_name: this.props.schoolInfo.name,
      school_code: this.props.schoolInfo.dps_school_code,
      user_id: this.props.userId
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
