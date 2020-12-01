const INITIAL_STATE = {
  isSignedIn: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "sign_in":
      console.log(action.payload);
      return { ...state, isSignedIn: true };
    default:
      return state;
  }
};
