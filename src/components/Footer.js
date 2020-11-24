import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 menu_btm">
            <ul>
              <li>
                <Link to="/" className="active">
                  ENOL-ETH
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  ENOL
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  TELEGRAM
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  GITHUB
                </Link>
              </li>

              <li>
                <Link to="/" className="">
                  TWITTER
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 copyright_btm">
            <Link to="/" className="">
              COPYRIGHT ALL RIGHT RESERVED 2020
            </Link>
          </div>

          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
