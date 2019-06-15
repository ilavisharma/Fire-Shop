import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">React Shop</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">
            Home
          </Link>
          <a className="p-2 text-dark" href="#">
            Store
          </a>
          <a className="p-2 text-dark" href="#">
            Support
          </a>
          <Link className="p-2 text-dark" to="/about">
            About
          </Link>
        </nav>
        <a className="btn btn-outline-primary" href="#">
          Sign in
        </a>
      </div>
    );
  }
}

export default Navbar;
