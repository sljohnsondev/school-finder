import React from 'react';
import './favorites.css';
import SchoolCard from '../../components/SchoolCard/SchoolCard';

const Favorites = props => (
  (
    <div className="favorites-container">
      <SchoolCard school={props.school} />
    </div>
  )
);

export default Favorites;
