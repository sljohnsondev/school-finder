import React from 'react';
import './FavoriteButton.css';
import heart from '../../assets/heart.svg'

const favoriteButton = (props) => {

  const schoolData = {
    school_id: props.schoolInfo.id,
    school_address: props.schoolInfo.address,
    school_website: props.schoolInfo.website,
    school_name: props.schoolInfo.name,
    school_code: props.schoolInfo.school_code,
    user_id: props.userId
  }
  
  return (
    <img src={heart} alt='favorite' className='add-favorite' onClick={ () => props.makeFavorite(props.userId, schoolData) } />
    )
};

export default favoriteButton;
