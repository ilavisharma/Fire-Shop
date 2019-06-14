import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './Card.css';

class Card extends React.Component {
  render() {
    const { image, name, price } = this.props.product;
    return (
      <div className="col-md-3 col-sm-6 h-100">
        <div className="img-fluid">
          <img src={image} alt={name} />
          <div className="caption">
            <h5>{name}</h5>
          </div>
          <p>
            <Link to="#" className="btn btn-primary">
              {price}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.object
};

export default Card;
