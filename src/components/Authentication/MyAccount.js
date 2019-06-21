import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { signOut } from '../../actions';
import { toast } from 'react-toastify';

class MyAccount extends Component {
  componentDidMount() {
    const { auth } = this.props;
    if (!auth.isSignedIn) {
      toast.warn('You need to signin');
      history.push('/account/signin');
    }
  }

  onSignOutClick = () => {
    // firebase.auth().signOut();
    // toast.success('Signed out succesfully');
  };

  render() {
    const { auth } = this.props;
    return (
      <div className="container">
        <h2 className="display-3">{auth.displayName || auth.email}</h2>

        <button onClick={this.props.signOut} className="btn btn-primary">
          SignOut
        </button>
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
