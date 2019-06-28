import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, clearProduct, addToCart } from '../actions';
import { Helmet } from 'react-helmet';
import Carousel from './Carousel';

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentWillUnmount() {
    // this.props.clearProduct();
  }

  onAddToCartClick = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    if (!this.props.product) {
      return (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      const { price, image, name } = this.props.product;
      return (
        <div className="container my-5">
          {/* Helmet for meta tags */}
          <Helmet>
            <title>{name}</title>
          </Helmet>
          <div className="row">
            <div className="col-md-3">
              <div className="list-group">
                <li className="list-group-item active">Info 1</li>
                <li className="list-group-item">Info 2</li>
                <li className="list-group-item">Info 3</li>
              </div>
            </div>
            <div className="col-md-9 mb-5">
              <h4 className="display-4">{name}</h4>
              <Carousel images={image} />
              <h5>{`Rs ${price}`}</h5>
              <button
                onClick={this.onAddToCartClick}
                className="btn btn-outline-success btn-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.currentProduct,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { fetchProduct, clearProduct, addToCart }
)(ProductDetail);
