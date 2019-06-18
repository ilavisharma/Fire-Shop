import React, { Component } from 'react';
import './AuthButton.css';

class GoogleAuth extends Component {
  render() {
    return (
      <button className="loginBtn loginBtn--google">Login with Google</button>
    );
  }
}

export default GoogleAuth;
