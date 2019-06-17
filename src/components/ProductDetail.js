import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, clearProduct } from '../actions';
import { Helmet } from 'react-helmet';
import Carousel from './Carousel';

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  render() {
    if (!this.props.product) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      const { price, image, name } = this.props.product;
      return (
        <div className="container">
          {/* Helmet for meta tags */}
          <Helmet>
            <title>{name}</title>
          </Helmet>
          <div className="row">
            <div class="col-md-3">
              <div class="list-group">
                <li class="list-group-item active">Info 1</li>
                <li class="list-group-item">Info 2</li>
                <li class="list-group-item">Info 3</li>
              </div>
            </div>
            <div className="col-md-9">
              <h4 className="display-4">{name}</h4>
              <Carousel images={image} />
              <h5>{`Rs ${price}`}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.currentProduct
  };
};

export default connect(
  mapStateToProps,
  { fetchProduct, clearProduct }
)(ProductDetail);
