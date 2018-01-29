import React, { Component } from 'react';
import './signin-style.css';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      loginError: false,
    };
  }

  setError() {
    if (this.state.loginError === false) {
      this.setState({ loginError: true });
    }
  }

  errorStyle = {
      fontWeight: "bold",
      color: "rgba(255, 99, 71, 1)",
      fontSize: "16px"
  }


  render() {
    const { loginError } = this.state;
    const { toggleTab } = this.props;

    return (
      <div>
        <div className="lock-page" onClick={() => this.setError()} />
        <div className="sign-in-container">
          <h2>Welcome to School Finder!</h2>
          <p style={loginError ? this.errorStyle : {}}>
            Please sign-in to the app to
            <br />
            begin your school search
          </p>
          <img
            className="google-btn-img"
            alt="Google sign-in link"
            src={require('../../assets/btn_google_signin.png')}
            onClick={() => this.props.signInHandler(toggleTab, true)}
          />
          <p
            className="alt-login"
            onClick={() => this.props.signInHandler(toggleTab, false)}>I'm just here for a quick visit</p>
        </div>
      </div>
    );
  }
}

export default SignIn;
