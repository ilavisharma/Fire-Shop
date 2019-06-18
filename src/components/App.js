import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CardDeck from './Home/CardDeck';
import About from './About';
import ProductDetail from './ProductDetail';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';

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
            <Route path="/account/signin" component={SignIn} />
            <Route path="/account/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
