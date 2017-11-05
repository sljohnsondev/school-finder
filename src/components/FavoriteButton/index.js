import React from 'react';
import './FavoriteButton.css';
import heart from '../../assets/heart.svg'

const favoriteButton = (props) => {

  console.log('props in favorite ', props.schoolInfo);

  // const schoolData = {
  //   school_id: ,
  //   school_address: ,
  //   school_website: ,
  //   school_name: ,
  //   school_code: ,
  //   user_id: 
  // }
  
  return (
    <img src={heart} alt='favorite' className='add-favorite' onClick={ () => props.addFavorite(props.schoolInfo) } />
    )
};

export default favoriteButton;
