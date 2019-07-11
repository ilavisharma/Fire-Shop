import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../actions';

class Checkout extends Component {
  // options to be provided
  options = {
    key: 'rzp_test_hqmemb6VQxI36u',
    name: 'Guitar Shop',
    description: 'A ReactJS Project',
    handler: response => {
      // handler function
      const { razorpay_payment_id: paymentId } = response;
      // this.props.createOrder(paymentId);
      console.log(paymentId);
    },
    payment_capture: 1,
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
