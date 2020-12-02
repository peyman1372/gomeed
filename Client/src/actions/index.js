import axios from "axios";
import history from "../history";

export const signIn = (formData) => async (dispatch) => {
  const response = await axios.get("http://127.0.0.1:3001/users/1");
  if (response.data.usr === formData.username) {
    if (response.data.pas === formData.password) {
      dispatch({ type: "sign_in" });
      history.push("/loggedin");
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("Username does not exist");
  }
};

export const captchaChecked = (formData) => async (dispatch) => {
  const RECAPTCHA_SERVER_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
  const humanKey = formData;
  console.log(humanKey);
  // const response = await axios.post(
  //   "https://www.google.com/recaptcha/api/siteverify",
  //   {
  //     secret: RECAPTCHA_SERVER_KEY,
  //     response: humanKey,
  //   }
  // );
  // console.log(response);
  const isCaptchaChecked = {
    value: false,
  };
  if (humanKey) {
    console.log("here");
    isCaptchaChecked.value = true;
  }

  dispatch({ type: "captchaChecked", payload: isCaptchaChecked });
};
