import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions';

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
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
              <p class="lead">{name}</p>
              <div class="list-group">
                <li class="list-group-item active">Info 1</li>
                <li class="list-group-item">Info 2</li>
                <li class="list-group-item">Info 3</li>
              </div>
            </div>
            <div className="col-md-9">
              <div className="thumbnail">
                <img src={image[0]} alt="product" className="img-fluid" />
                <div className="caption-full">
                  <h4 className="pull-right">{`Rs${price}`}</h4>
                </div>
              </div>
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
  { fetchProduct }
)(ProductDetail);
