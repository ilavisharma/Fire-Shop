import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { signOut } from '../../actions';
import { toast } from 'react-toastify';

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
      <div className="container mt-4">
        <div className="row">
          <div className="col col-3">
            <img
              src={
                this.props.auth.photoURL ||
                'https://banner2.kisspng.com/20180707/qiy/kisspng-computer-icons-user-account-user-profile-clip-art-account-icon-5b40a50d1441e3.591738481530963213083.jpg'
              }
              alt="account"
              className="img-thumbnail"
            />
          </div>
          <div className="col col-9">
            <h3 className="display-3">
              {this.props.auth.displayName || this.props.auth.email}
            </h3>
            <br />

            <button onClick={this.props.signOut} className="btn btn-primary">
              SignOut
            </button>

            <h1 className="display-4 mt-5">Here are your recent orders:</h1>
          </div>
        </div>
      </div>
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
