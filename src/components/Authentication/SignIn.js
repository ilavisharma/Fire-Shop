import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container-fluid  bg-light text-dark">
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
                placeholder="Email address"
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
                      className="col-6 btn btn-secondary btn-sm float-left"
                    >
                      SignUp
                    </Link>
                  </div>
                  <div className="col">
                    <button className="col-6 btn btn-primary btn-sm float-right">
                      Sign In
                    </button>
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

export default SignIn;
