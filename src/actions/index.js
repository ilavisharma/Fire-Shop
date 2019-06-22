import firebase from '../lib/firebase';
import history from '../history';
import { toast } from 'react-toastify';

export const fetchProducts = () => async dispatch => {
  const ProductsRef = firebase.firestore().collection('products');

  try {
    //   get the document snapshot
    const snapshot = await ProductsRef.get();

    const products = [];
    snapshot.forEach(doc => {
      const docData = doc.data();
      //   push the data with the document id
      products.push({ ...docData, id: doc.id });
    });

    // dispatch the data now
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: products
    });
  } catch (e) {
    console.log('There was some error\n', e);
    toast.error(e.message);
  }
};

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS'
  };
};

export const fetchProduct = docId => async dispatch => {
  const ProductRef = firebase
    .firestore()
    .collection('products')
    .doc(docId);

  try {
    // get document snapshot
    const doc = await ProductRef.get();
    if (!doc.exists) {
      console.log('No such Document');
      dispatch({
        type: 'FETCH_PRODUCT',
        payload: null
      });
    } else {
      const docData = doc.data();
      dispatch({
        type: 'FETCH_PRODUCT',
        payload: { ...docData, id: doc.id }
      });
    }
  } catch (e) {
    console.log('There was some error\n', e);
    toast.error(e.message);
  }
};

export const clearProduct = () => {
  return {
    type: 'CLEAR_PRODUCT'
  };
};

export const signOut = () => {
  firebase.auth().signOut();
  toast.success('Signed out succesfully');
  history.push('/');
  return {
    type: 'SIGN_OUT'
  };
};

export const signIn = ({ uid, displayName, email }, showToast=true) => async dispatch => {
  dispatch({
    type: 'SIGN_IN',
    payload: { uid, displayName, email }
  });

  if (showToast) {
  toast.success(`Welcome ${displayName || email}`);}

  // check this user in the database

  const userRef = firebase
    .firestore()
    .collection('users')
    .doc(uid);

  try {
    const doc = await userRef.get();

    if (!doc.exists) {
      // this is a new user
      // save in the db
      userRef.set({
        uid,
        displayName,
        email
      });
    } else {
      // this user already exists
      // retrieve that user data
    }

    history.push('/');
  } catch (e) {
    console.log(e);
    toast.error(e.message);
  }
};
