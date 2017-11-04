import React from 'react';
import FavoriteButton from '../../containers/FavoriteButton-container';
import './school-card.css';

const SchoolCard = (props) => {

  return (
    <div className='school-card-container'>
      <h1 className='school-name'>{ props.school.name }</h1>
      <p>School info here</p>
      <FavoriteButton id={ props.school.id }/>

    </div>
  )
};

export default SchoolCard;