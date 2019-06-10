import React from 'react';
import firebase from '../lib/firebase';

class App extends React.Component {
  componentDidMount() {
    const ref = firebase.firestore().collection('products');
    ref
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  render() {
    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
