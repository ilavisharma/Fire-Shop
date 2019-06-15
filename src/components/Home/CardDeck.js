import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, clearProducts } from '../../actions';
import firebase from '../../lib/firebase';
import { ProductCard } from 'react-ui-cards';
import './CardDeck.css';
import { Link } from 'react-router-dom';

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
      return products.map(product => (
        <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
          <ProductCard
            photos={product.image}
            price={`Rs ${product.price}`}
            productName={product.name}
            key={product.id}
            buttonText=""
          />
        </Link>
      ));
    }
  };

  componentWillUnmount() {
    // clear the products when this component will unmount
    this.props.clearProducts();
  }

  render() {
    if (this.props.products.length === 0) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return <div className="card-container">{this.renderCards()}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, clearProducts }
)(CardDeck);
