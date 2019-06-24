import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { iconStyle } from '../../styles/icons';
import firebase from '../../lib/firebase';
import { signIn } from '../../actions';
import history from '../../history';

const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { user } = data;
      props.signIn(user);
      history.push('/');
    } catch (e) {
      console.log(e);
      toast.error(e.message);
      setIsLoading(false);
    }
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
                    {!isLoading ? (
                      <button
                        disabled={!(email && password)}
                        className="btn btn-primary float-right"
                      >
                        SignUp
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary float-right"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { signIn }
)(SignUp);
