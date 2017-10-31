import React from 'react';
import './favorites.css';
import SchoolCard from '../../containers/SchoolCard-container';

const Favorites = (props) => {

  return (

    <div className='favorites-container'>
    
      <SchoolCard school={ props.school } />

    </div>
  )
};

export default Favorites;