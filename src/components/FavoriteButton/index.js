import React from 'react';
import heart from '../../assets/heart.svg'
import './FavoriteButton.css';

const favoriteButton = (props) => {
  return (
    <img src={heart} alt='favorite' className='add-favorite' onClick={ () => props.addFavorite(props.id) } />
    )
};

export default favoriteButton;
