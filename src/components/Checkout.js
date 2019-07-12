import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../actions';

class Checkout extends Component {
  // checkout handler
  handleCheckout = paymentId => {
    this.props.createOrder(paymentId);
    // TODO: add success redirect here
    alert('Your order was successfully placed');
  };

  // options to be provided for payment gateway
  options = {
    key: 'rzp_test_QmAVKoFyG0mzMW',
    name: 'Guitar Shop',
    description: 'A ReactJS Project',
    handler: response => {
      // handler function
      const { razorpay_payment_id: paymentId } = response;
      this.handleCheckout(paymentId);
    },
    modal: {
      ondismiss: function() {
        console.log('Checkout form closed by the user');
      }
    }
  };

  componentDidMount() {
    this.rzp = new window.Razorpay({
      ...this.options,
      amount: this.props.amount
    });
  }

  componentDidUpdate(prevProps) {
    // if the amount has changed
    if (prevProps.amount !== this.props.amount) {
      this.rzp = new window.Razorpay({
        ...this.options,
        amount: this.props.amount
      });
    }
  }

  handleClick = () => {
    this.rzp.open();
  };

  render() {
    // console.log(this.props.amount);
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="btn btn-primary"
        >{`Pay ₹ ${this.props.amount / 100}`}</button>
      </div>
    );
  }
}

export default connect(
  null,
  { createOrder }
)(Checkout);
