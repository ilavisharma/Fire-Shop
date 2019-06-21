import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CardDeck from './Home/CardDeck';
import About from './About';
import ProductDetail from './ProductDetail';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import history from '../history';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar />
          <ToastContainer autoclose={2000} />
          <Switch>
            <Route exact path="/" component={CardDeck} />
            <Route path="/about" component={About} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/account/signin" component={SignIn} />
            <Route path="/account/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
