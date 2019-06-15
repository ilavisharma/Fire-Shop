import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CardDeck from './Home/CardDeck';
import About from './About';
import ProductDetail from './ProductDetail';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CardDeck} />
            <Route path="/about" component={About} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
