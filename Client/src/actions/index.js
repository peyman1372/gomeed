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
