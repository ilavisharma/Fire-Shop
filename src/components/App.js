import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CardDeck from './Home/CardDeck';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CardDeck} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
