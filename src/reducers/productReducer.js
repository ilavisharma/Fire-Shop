export default (state = null, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT':
        return action.payload;
  
      case 'CLEAR_PRODUCT':
        return null;
  
      default:
        return state;
    }
  };
  