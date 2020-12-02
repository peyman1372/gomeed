const INITIAL_STATE = {
  isCaptchaChecked: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "captchaChecked":
      console.log("here2");
      return {
        ...state,
        isCaptchaChecked: action.payload.value,
      };
    default:
      return state;
  }
};
