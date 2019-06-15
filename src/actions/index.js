import firebase from '../lib/firebase';

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
  }
};
