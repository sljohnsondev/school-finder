import React from 'react';
import FavoriteButton from '../../containers/FavoriteButton-container';
import './school-card.css';

const SchoolCard = (props) => {

  return (
    <div className='school-card-container'>
      
      <h1 className='school-name'>{ props.school.school_name }</h1>

      <p className='results-fields'>{props.school.school_address}</p>
        <a href={props.school.website} className='school-url results-fields' target='_blank'>School Website</a>
      <FavoriteButton id={ props.school.id } schoolInfo={ props.school }/>

    </div>
  )
};

export default SchoolCard;
