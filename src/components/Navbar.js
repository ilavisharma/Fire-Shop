import React from 'react';
import { Link } from 'react-router-dom';
import { iconStyle } from '../styles/icons';

class Navbar extends React.Component {
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
          <Link className="p-2 text-dark" to="#">
            <i style={iconStyle} className="material-icons">
              shopping_cart
            </i>
            Cart
          </Link>
          <Link className="p-2 text-dark" to="/myaccount">
            <i style={iconStyle} className="material-icons">
              account_circle
            </i>
            Account
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
