import React, { Component } from 'react';
import './user-profile.css';

export default class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      hideProfile: false      
    }
  }

  slideProfileComponent() {
    this.setState({ hideProfile: !this.state.hideProfile })
  }

  render() {
    return (

      <div className='profile'>
      
        <button className={ this.state.hideProfile ? "slide-profile-btn hidden-profile" : "slide-profile-btn"} onClick={ () => this.slideProfileComponent() }>{this.state.hideProfile ? '<' : '>' }</button>

        <div className={ this.state.hideProfile ? 'avatar show-avatar' : 'avatar'}>
          <img src={ this.props.photo } alt='avatar' className='avatar-photo' />          
        </div>

        <div className={ this.state.hideProfile ? 'profile-container hide-profile' : 'profile-container' }>
          
          <h2 className='profile-header'>{ this.props.name }</h2>

          <img src={ this.props.photo } alt='avatar' className='user-photo' />

          <div className='user-info'>
            <h4 className="address">1771 17th St. Denver, CO. 80201 USA MothaLicka</h4>
            <h4 className='email'>{ this.props.email }</h4>
          </div>

          <div className='favorite-schools'>
            The School of Hard Knocks
          </div>
        
        </div>

      </div>
    )
  };
};