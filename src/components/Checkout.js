import React, { Component } from 'react';

class Checkout extends Component {
  // options to be provided
  options = {
    key: 'rzp_test_hqmemb6VQxI36u',
    name: 'Guitar Shop',
    description: 'A ReactJS Project',
    handler: response => {
      // handler function
      const { razorpay_payment_id: paymentId } = response;
      console.log(orderId, paymentId, signature);
    },
    payment_capture: 1,
    modal: {
      ondismiss: function() {
        console.log('Checkout form closed by the yser');
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
        >{`Pay Rs ${this.props.amount}`}</button>
      </div>
    );
  }
}

export default Checkout;
