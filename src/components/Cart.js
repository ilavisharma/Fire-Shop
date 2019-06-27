import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { iconStyle } from '../styles/icons';
import { incrementProduct, decrementProduct, removeFromCart } from '../actions';

const Cart = props => {
  const renderList = () =>
    props.cart.map(item => (
      <div key={item.id} className="row my-4">
        <div className="col col-5">{item.name}</div>
        <div className="col col-3">
          <button
            onClick={() => props.decrementProduct(item)}
            className="btn btn-secondary btn-sm mx-2"
            disabled={item.quantity === 1}
          >
            -
          </button>
          {item.quantity}
          <button
            onClick={() => props.incrementProduct(item)}
            className="btn btn-secondary btn-sm mx-2"
          >
            +
          </button>
        </div>
        <div className="col col-3">{`Rs ${item.price * item.quantity}`}</div>
        <div className="col col-1">
          <i
            onClick={() => props.removeFromCart(item)}
            className="material-icons"
            style={{ ...iconStyle, cursor: 'pointer' }}
          >
            delete
          </i>
        </div>
      </div>
    ));

  const calcTotal = () => {
    let total = 0;
    props.cart.forEach(item => (total += item.price * item.quantity));
    return total;
  };

  if (props.cart.length !== 0) {
    return (
      <div className="container">
        {/* Helmet info */}
        <Helmet>
          <title>{`${props.cart.length} items in cart`}</title>
        </Helmet>
        <h1 className="display-4 mb-4">These are the items in your cart</h1>
        {renderList()}
        <div className="container">
          <div className="float-right">Total {` Rs ${calcTotal()}`}</div>
        </div>
        
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
  { incrementProduct, decrementProduct, removeFromCart }
)(Cart);
