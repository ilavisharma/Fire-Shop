import React, { Component } from 'react';

class Checkout extends Component {
  options = {
    key: 'rzp_test_hqmemb6VQxI36u',
    amount: this.props.amount,
    name: 'Guitar Shop',
    description: 'A ReactJS Project',
    handler: response => {
      // handler function
      alert(response.razorpay_payment_id);
    }
  };

  componentDidMount() {
    this.rzp = new window.Razorpay(this.options);
    console.log(this.rzp);
  }

  handleClick = () => {
    this.rzp.open();
    console.log('Payment was just made');
  };

  render() {
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
