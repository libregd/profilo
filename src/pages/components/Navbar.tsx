import React from "react";
import { Link } from "react-router-dom";
import { default as logoSvg } from "../../images/logo.svg";
const Navbar = () => {
  return (
    <header>

      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logoSvg} alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="../Works">Works</Link>
          <Link to="../About">About</Link>
        </div>
      </nav>

    </header>
  );
};
export default Navbar;
