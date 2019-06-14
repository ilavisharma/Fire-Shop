import React from 'react';

class Product extends React.Component {
  render() {
    console.log(this.props);
    return <div>Product Component</div>;
  }
}
export default Product;
