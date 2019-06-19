import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { iconStyle } from '../../styles/icons';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid text-dark">
      <div className="row justify-content-center align-items-center">
        <h1>Sign In</h1>
      </div>
      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Link
                      to="/account/signup"
                      className="btn btn-secondary float-left"
                    >
                      <i style={iconStyle} className="material-icons">
                        arrow_back_ios
                      </i>
                      SignUp
                    </Link>
                  </div>
                  <div className="col">
                    <button
                      disabled={!(email && password)}
                      className="btn btn-primary float-right"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <hr />
          <div className="form-group">
            <GoogleAuth />
          </div>
          <div className="form-group">
            <FacebookAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
