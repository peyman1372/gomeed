import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = (props) => (
  <div>
    {props.meta.touched && props.meta.error}
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={(response) => props.input.onChange(response)}
    />
  </div>
);

// Captcha.propTypes = {
//   input: React.PropTypes.object.isRequired,
// };

export default Captcha;
