import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { iconStyle } from '../../styles/icons';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';
import firebase from '../../lib/firebase';
import { signIn } from '../../actions';

const SignUp = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(data.user);
    const { user } = data;
    props.signIn(user.uid, name, user.email);
  };

  return (
    <div className="container-fluid text-dark">
      <div className="row justify-content-center align-items-center">
        <h1>Sign Up</h1>
      </div>
      <hr />
      <div className="row justify-content-center align-items-center">
        <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
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
                      to="/account/signin"
                      className="btn btn-secondary  float-left"
                    >
                      <i style={iconStyle} className="material-icons">
                        arrow_back_ios
                      </i>
                      SignIn
                    </Link>
                  </div>
                  <div className="col">
                    <button
                      disabled={!(name && email && password)}
                      className="btn btn-primary float-right"
                    >
                      SignUp
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

export default connect(
  null,
  { signIn }
)(SignUp);
