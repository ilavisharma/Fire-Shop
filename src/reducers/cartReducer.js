export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item !== action.payload);
    case 'INCREMENT':
      let newArray = [];
      state.forEach(item => {
        if (item.id === action.payload.id) {
          item.quantity++;
          newArray.push(item);
        } else newArray.push(item);
      });
      return newArray;
    case 'DECREMENT':
      let newCart = [];
      state.forEach(item => {
        if (item.id === action.payload.id) {
          item.quantity--;
          newCart.push(item);
        } else newCart.push(item);
      });
      return newCart;

    default:
      return state;
  }
};
