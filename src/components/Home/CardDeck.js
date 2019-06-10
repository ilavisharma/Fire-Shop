import React from 'react';
import Card from './Card';

const CardDeck = props => {
  return (
    <div className="container">
      <div class="card-deck">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardDeck;
