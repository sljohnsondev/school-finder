import React, { Component } from 'react';
import './user-profile.css';
import Favorites from '../Favorites/Favorites';
import alias from '../../assets/user.svg';

export default class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      hideProfile: true,
      favorites: []
    }
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.userId !== undefined) {
      Promise.resolve(this.props.getAllUsers(nextProps.userId))
        .then( user => {
          console.log('user in promise ', user);
          
          if (this.props.getAllUsers(nextProps.userId)) {
            return this.props.getUserFavorites(nextProps.userId)
          }
          return this.props.createUser(
            {
              username: nextProps.name,
              email: nextProps.email,
              street_address: '',
              oath_id: nextProps.userId
            }
          )
      })
    }
  }

  slideProfileComponent() {
    this.setState({ hideProfile: !this.state.hideProfile })
  }

  render() {
    
    const { name, email, photo } = this.props;
    const { hideProfile, favorites } = this.state;

    const mappedFavorites = this.state.favorites.map( school => <Favorites school={ school } key={ school.name } /> );

    return (

      <div className='profile'>
      
        <button className={ hideProfile ? "slide-profile-btn hidden-profile" : "slide-profile-btn"} onClick={ () => this.slideProfileComponent() }>{hideProfile ? '<' : '>' }</button>

        <div className={ hideProfile ? 'avatar show-avatar' : 'avatar'}>
          <img src={ photo ? photo : alias } alt='avatar' className='avatar-photo' />          
        </div>

        <div className={ hideProfile ? 'profile-container hide-profile' : 'profile-container' }>
          
          <div className='user-info'>
            <h2 className='profile-header'>{ name }</h2>

            <img src={ photo ? photo : alias } alt='avatar' className='user-photo' />

            <h4 className="address">1771 17th St. Denver, CO. 80201 USA MothaLicka</h4>
            <h4 className='email'>{ email }</h4>
          </div>

          <div>
            <h3 className='your-favorites'>Your Favorites</h3>
            <div className='favorite-schools'>
              { mappedFavorites }
            </div>
          </div>
        
        </div>

      </div>
    )
  };
};