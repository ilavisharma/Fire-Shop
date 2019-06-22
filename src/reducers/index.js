import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  currentProduct: productReducer,
  auth: authReducer,
  cart: cartReducer
});
