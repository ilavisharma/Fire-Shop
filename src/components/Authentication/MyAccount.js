import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { signOut } from '../../actions';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

class MyAccount extends Component {
  async componentDidMount() {
    const { auth } = this.props;
    if (!auth.isSignedIn) {
      toast.warn('You need to signin');
      history.push('/account/signin');
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>My Account</title>
        </Helmet>
        <div className="container mt-4">
          <div className="row">
            <div className="col col-3">
              <img
                src={this.props.auth.photoURL || '/img/avatar.png'}
                alt="account"
                className="img-thumbnail"
              />
            </div>
            <div className="col col-9">
              <h3 className="display-4">
                {this.props.auth.displayName || this.props.auth.email}
              </h3>
              <br />

              <button onClick={this.props.signOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
            <h1 className="display-5 mt-5">Here are your recent orders:</h1>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { signOut }
)(MyAccount);
