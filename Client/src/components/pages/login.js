import React from "react";
import { Field, reduxForm } from "redux-form";
import submit from "../submit";
import Captcha from "../Captcha";
import { connect } from "react-redux";
import { signIn } from "../../actions";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const Login = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;

  const onSubmit = (formData) => {
    console.log("test");
    console.log(props.isCaptchaChecked);
    if (props.isCaptchaChecked) {
      props.signIn(formData);
    } else {
      alert("Please check the captcha");
    }
  };
  return (
    <div>
      <div className="ui grid padded">
        <div class="row">
          <h2>Hoşgeldiniz!</h2>
        </div>
        <div class="row">
          <p>
            Dijital dünyanın ilk aracılı satış sistemini deneyimlemeye hazır
            mısınız?
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="ui form ">
        <div className="two fields">
          <div className="four wide field">
            <Field
              name="username"
              type="text"
              component={renderField}
              label="E-posta Adresiniz"
            />
          </div>
          <div className="four wide field">
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Şifreniz"
            />
          </div>
        </div>
        <div className="four wide field">
          <Field name="captcharesponse" component={Captcha} />
        </div>
        {error && <strong>{error}</strong>}
        <div className="bottom aligned">
          <button
            className="ui primary button"
            type="submit"
            disabled={submitting}
          >
            Log In
          </button>
          <button
            className="ui button"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { isCaptchaChecked: state.captcha.isCaptchaChecked };
};
export default connect(mapStateToProps, { signIn })(
  reduxForm({
    form: "submitValidation", // a unique identifier for this form
  })(Login)
);
