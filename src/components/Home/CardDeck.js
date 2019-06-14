import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import firebase from '../../lib/firebase';

class CardDeck extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    // realtime updates listener
    firebase
      .firestore()
      .collection('products')
      .onSnapshot(
        doc => {
          // fetch the products becoz of some new changes
          this.props.fetchProducts();
        },
        err => console.log(err)
      );
  }

  renderCards = () => {
    const { products } = this.props;
    if (products !== []) {
      return products.map(product => {
        return <Card product={product} key={product.id} />;
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="row text-center d-flex"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(CardDeck);
