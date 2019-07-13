import React from 'react';
import { Link } from 'react-router-dom';
import { iconStyle } from '../styles/icons';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import firebase from '../lib/firebase';

class Navbar extends React.Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

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
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top "
        style={{
          backgroundColor: '#545ADE',
          fontFamily: 'Roboto',
          fontSize: '21'
        }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand mb-0 h1"
            onClick={this.toggleNavbar}
          >
            <i style={iconStyle} className="material-icons">
              music_note
            </i>
            Guitar Shop
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link" onClick={this.toggleNavbar}>
                  <i style={iconStyle} className="material-icons">
                    home
                  </i>
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={this.toggleNavbar}
                >
                  <i style={iconStyle} className="material-icons">
                    info
                  </i>
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/myaccount/cart"
                  className="nav-link"
                  onClick={this.toggleNavbar}
                >
                  <i style={iconStyle} className="material-icons">
                    shopping_cart
                  </i>
                  Cart
                  <span className="badge badge-dark">
                    {this.props.cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/myaccount/info"
                  className="nav-link"
                  onClick={this.toggleNavbar}
                >
                  <i style={iconStyle} className="material-icons">
                    account_circle
                  </i>
                  {this.renderAccount()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
