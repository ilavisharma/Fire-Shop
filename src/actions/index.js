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

export const signIn = (
  { uid, displayName, email, photoURL },
  showToast = true
) => async dispatch => {
  dispatch({
    type: 'SIGN_IN',
    payload: { uid, displayName, email, photoURL }
  });

  if (showToast) {
    toast.success(`Welcome ${displayName || email}`);
  }

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
    }
  } catch (e) {
    console.log(e);
    toast.error(e.message);
  }
};

// CART ACTIONS
export const addToCart = product => (dispatch, getState) => {
  const { isSignedIn } = getState().auth;
  if (!isSignedIn) {
    return toast.warn('You need to sign in first');
  } else {
    const { cart } = getState();
    // check if this product is already present in cart

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast.info('This item already exists in your cart');
    } else {
      // create a new object so that the image can be removed
      const tempProduct = { ...product };
      delete tempProduct.image;
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...tempProduct, quantity: 1 }
      });
    }
  }
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  };
};

export const incrementProduct = product => {
  return {
    type: 'INCREMENT',
    payload: product
  };
};

export const decrementProduct = product => {
  return {
    type: 'DECREMENT',
    payload: product
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  };
};

export const createOrder = paymentId => async (dispatch, getState) => {
  const { cart, auth } = getState();

  // create new document in orders collection with all the details
  try {
    const order = {
      cart,
      paymentId,
      time: new Date()
    };

    const response = await firebase
      .firestore()
      .collection('orders')
      .add(order);

    // store the above document id in the user's orders array

    await firebase
      .firestore()
      .collection('users')
      .doc(auth.uid)
      .update({
        orders: firebase.firestore.FieldValue.arrayUnion({
          orderId: response.id,
          time: new Date()
        })
      });

    history.push('/myaccount/info');

    // TODO: clear the cart now

    // dispatch({
    //   type: 'CLEAR_CART'
    // });
  } catch (e) {
    console.log(e, e.message);
  }
};
