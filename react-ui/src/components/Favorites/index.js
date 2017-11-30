import React, { Component } from 'react';
import './favorites.css';
import SchoolCard from '../../components/SchoolCard';

class Favorites extends Component {

  noFavs() {
    return (
      <div>
        <p>You have not selected any favorite schools</p>
      </div>
    )
  }

  favoriteSchools(favorites) {
    return favorites.map((school, i) => <SchoolCard school={ school } key={ i } /> )
  }

  render() {

    const { favorites } = this.props

    return (
      <div className='favorites-container'>
        <h3 className="your-favorites">Your Favorites</h3>
        <div className="favorite-schools">
          { console.log('FAVORITES', favorites) }
          { favorites.length > 0 ? this.favoriteSchools(favorites) : this.noFavs() }
        </div>
      </div>
    )
  }
};

export default Favorites;
