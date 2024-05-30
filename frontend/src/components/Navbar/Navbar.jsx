import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("HOME");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("HOME")}
          className={menu === "HOME" ? "active" : ""}>
          HOME
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("MENU")}
          className={menu === "MENU" ? "active" : ""}>
          MENU
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("MOBILE-APP")}
          className={menu === "MOBILE-APP" ? "active" : ""}>
          MOBILE-APP
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("CONTACT-US")}
          className={menu === "CONTACT-US" ? "active" : ""}>
          CONTACT US
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
