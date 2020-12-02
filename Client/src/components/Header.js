import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import Logo from "../img/gomeed-logo.png";
const Header = () => {
  return (
    <div className="stackable ui doubling grid  padded middle aligned ">
      <div className="doubling three wide column left aligned ">
        {/* <Link to="/" className="item"> */}
        <img src={Logo} alt="website logo" />
        {/* </Link> */}
      </div>
      <div className="doubling three wide column left aligned ">
        DÜNYA'NIN İLK ÖDÜLLÜ İLAN SİTESİ
      </div>
      <div className="two wide column right aligned large screen only">
        Giriş Yap
      </div>
      <div className="two wide column  right aligned large screen only">
        Üye Ol
      </div>
      <div className="three wide column right aligned">
        <button className="ui primary basic button">İlanları Görüntüle</button>
      </div>
      <div className="three wide column right aligned">
        <button className="ui primary button">Talepleri Görüntüle</button>
      </div>
    </div>
  );
};
export default Header;
