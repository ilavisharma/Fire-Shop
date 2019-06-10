import React from 'react';
import CardList from './Home/CardDeck';
import Navbar from './Navbar';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <CardList />
      </div>
    );
  }
}

export default App;
