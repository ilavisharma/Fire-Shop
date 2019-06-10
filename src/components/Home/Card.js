import React from 'react';

class Card extends React.Component {
  render() {
    const { image, name, price } = this.props.product;
    return (
      <div class="card">
        <img src={image} class="card-img-top" alt="guitar" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{price}</p>
          <p class="card-text">
            <small class="text-muted">{price}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
