import React, { Component } from 'react';
import './AuthButton.css';

class FacebookAuth extends Component {
  render() {
    return (
      <button className="loginBtn loginBtn--facebook">
        Login with Facebook
      </button>
    );
  }
}

export default FacebookAuth;
