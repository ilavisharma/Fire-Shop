import React from 'react';
import firebase from '../lib/firebase';
import Navbar from './Navbar';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
