import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../css/style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4 logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="col-md-8 menu_r">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  Pools
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  About
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  Vote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
