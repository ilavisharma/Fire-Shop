import React, { Component } from 'react';
import './AuthButton.css';
import firebase from '../../lib/firebase';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

class GoogleAuth extends Component {
  onButtonClick = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user } = result;
      this.props.signIn(user);
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };

  render() {
    return (
      <button
        onClick={this.onButtonClick}
        className="loginBtn loginBtn--google"
      >
        Login with Google
      </button>
    );
  }
}

export default connect(
  null,
  { signIn }
)(GoogleAuth);
