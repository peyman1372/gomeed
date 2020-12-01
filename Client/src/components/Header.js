import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import Logo from "../img/gomeed-logo.png";
const Header = () => {
  return (
    // <div className="ui secondary pointing menu">
    <div className="ui dividing  header ">
      {/* <Link to="/" className="item">
        <img src={Logo} alt="website logo" />{" "}
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        { <GoogleAuth /> }
      </div> */}
      <div className="ui grid  middle aligned">
        <div className="three wide  column">
          <Link to="/" className="item">
            <img src={Logo} alt="website logo" />
          </Link>
        </div>
        <div className="three wide column left aligned">
          DÜNYA'NIN İLK ÖDÜLLÜ İLAN SİTESİ
        </div>
        <div className="two wide column right aligned">Giriş Yap</div>
        <div className="two wide column  right aligned">Üye Ol</div>
        <div className="three wide column right aligned">
          <button className="ui primary basic button">
            İlanları Görüntüle
          </button>
        </div>
        <div className="three wide column right aligned">
          <button className="ui primary button">Talepleri Görüntüle</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
