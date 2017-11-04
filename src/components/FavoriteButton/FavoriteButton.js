import React, { Component } from 'react';
import './FavoriteButton.css';
import FavoriteButtonContainer from '../../containers/FavoriteButton-container';
import heart from '../../assets/heart.svg'

const favoriteButton = (props) => {
  return (
    <img src={heart} alt='favorite' className='add-favorite' onClick={ () => props.addFavorite(props.id) } />
    )
};

export default favoriteButton;
