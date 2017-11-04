import React from 'react';
import './school-card.css';

const SchoolCard = (props) => {
  // console.log('props in schoolcard', props);


  return (

    <div className='school-card-container'>

      <div className='remove-favorite' onClick={ () => props.removeFavorite(props.school.id) }>X</div>
      <h1>{ props.school.name }</h1>
      <p>School info here</p>
      <div className='add-favorite' onClick={ () => props.addFavorite(props.school.id) }>
        Favorite
      </div>

    </div>
  )
};

export default SchoolCard;
