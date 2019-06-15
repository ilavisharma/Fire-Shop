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
