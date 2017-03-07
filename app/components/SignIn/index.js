import React from 'react';
import './signin-style.css'

const SignIn = (props) => {
  return (
    <div className='sign-in-container'>
      <h2>Please sign-in to start<br/>your school search</h2>
      <img
        className='google-btn-img'
        alt='Google sign-in link'
        src={require('../../assets/btn_google_signin.png')}
        onClick={ () => props.signInHandler() }
      />
    </div>
  )
}

export default SignIn;
