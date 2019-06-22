import React from 'react';
import { Link } from 'react-router-dom';
import { iconStyle } from '../styles/icons';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import firebase from '../lib/firebase';

class Navbar extends React.Component {
  componentDidMount() {
    // auth state listener
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.signIn(user, false);
      }
    });
  }

  renderAccount = () => {
    const { auth } = this.props;
    if (auth.isSignedIn) {
      const name = auth.displayName || auth.email;
      return name;
    } else {
      return 'Account';
    }
  };

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <i style={iconStyle} className="material-icons">
            music_note
          </i>
          Guitar Shop
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">
            <i style={iconStyle} className="material-icons">
              home
            </i>
            Home
          </Link>
          <Link className="p-2 text-dark" to="/about">
            <i style={iconStyle} className="material-icons">
              info
            </i>
            About
          </Link>
          <Link className="p-2 text-dark" to="/myaccount/cart">
            <i style={iconStyle} className="material-icons">
              shopping_cart
            </i>
            Cart
            <span className="badge badge-dark">{this.props.cart.length}</span>
          </Link>
          <Link className="p-2 text-dark" to="/myaccount/info">
            <i style={iconStyle} className="material-icons">
              account_circle
            </i>
            {this.renderAccount()}
          </Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Navbar);
