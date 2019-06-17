import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, clearProduct } from '../actions';
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
          <div className="row">
            <div class="col-md-3">
              <div class="list-group">
                <li class="list-group-item active">Info 1</li>
                <li class="list-group-item">Info 2</li>
                <li class="list-group-item">Info 3</li>
              </div>
            </div>
            <div className="col-md-9">
              {/* <div className="thumbnail">
                <img src={image[0]} alt="product" className="img-fluid" />
                <div className="caption-full">
                  <h4 className="pull-right">{`Rs${price}`}</h4>
                </div>
              </div> */}
              <h4 className="display-4">{name}</h4>
              <Carousel images={image} />
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
