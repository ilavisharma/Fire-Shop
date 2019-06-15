export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload;

    case 'CLEAR_PRODUCTS':
      return [];

    default:
      return state;
  }
};
