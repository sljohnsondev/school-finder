import React from 'react';
import './favorites.css';
import SchoolCard from '../../components/SchoolCard/SchoolCard';

const Favorites = (props) => {

  return (

    <div className='favorites-container'>
    
      <SchoolCard school={ props.school } getPopulation={ props.getPopulation }/>

    </div>
  )
};

export default Favorites;