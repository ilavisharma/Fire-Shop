import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {} from '../actions';

const Cart = props => {
  const renderList = () =>
    props.cart.map(item => <li className="list-group-item">{item.name}</li>);

  if (props.cart.length !== 0) {
    return (
      <div className="container">
        {/* Helmet info */}
        <Helmet>
          <title>{`${props.cart.length} items in cart`}</title>
        </Helmet>
        <ul className="list-group list-group-flush">{renderList()}</ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        {/* Helmet info */}
        <Helmet>
          <title>Empty Cart</title>
        </Helmet>
        <h3 className="display-3">Cart is empty</h3>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  {}
)(Cart);
