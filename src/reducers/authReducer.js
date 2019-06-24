const INITIAL_STATE = {
  isSignedIn: false,
  uid: null,
  displayName: null,
  photoURL: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email
      };
    case 'SIGN_OUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
