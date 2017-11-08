import React, { Component } from 'react';
import { toggleTabView, hideComponent } from '../Helpers/tabControls';
import Favorites from '../Favorites';
import alias from '../../assets/user.svg';
import './user-profile.css';

export default class UserProfile extends Component {

  componentWillReceiveProps(nextProps) {
    const userInfo = {
      username: nextProps.name,
      email: nextProps.email,
      oath_id: nextProps.userId
    }

    if (nextProps.userId !== this.props.userId) {
      this.props.getUser(nextProps.userId, userInfo)
    }
  }

  render() {
    const { name, email, photo, tab, toggleTab, favorites, user, getPopulation } = this.props;
    const mappedFavorites = favorites.map( school => <Favorites school={ school } commuteInfo={ null } getPopulation={ getPopulation } key={ school.school_id } /> );
    let hideProfile = hideComponent(tab, 'profile');

    return (

      <div className='profile'>

        <button className={ hideProfile ? "slide-profile-btn hidden-profile" : "slide-profile-btn" } onClick={ () => toggleTabView(tab, toggleTab, 'profile') }>{ hideProfile ? '<' : '>' }</button>

        <div className={ hideProfile ? 'avatar show-avatar' : 'avatar hide-avatar'}>
          <div className='avatar-container'>
            <img src={ photo ? photo : alias } alt='avatar' className='avatar-photo' />
          </div>
        </div>

        <div className={ hideProfile ? 'profile-container hide-profile' : 'profile-container' }>

          <div className='user-info'>
            <h2 className='profile-header'>{ name }</h2>

            <img src={ photo ? photo : alias } alt='avatar' className='user-photo' />

            <h4 className="address">{ user.street_address } Denver, CO</h4>
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
