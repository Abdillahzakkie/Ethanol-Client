import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import imgs from "../images/main_banner_img.png";
import icon1 from "../images/whatis1_img.png";
import icon2 from "../images/whatis2_img.png";
import icon3 from "../images/whatis3_img.png";
import icon4 from "../images/whatis4_img.png";
function HomePage(props) {
  return (
    <div>
      <div className="top_m_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7 banner1_img_t">
              <h2>SAVE THE WORLD</h2>
              <p>
                Hodl
                <span>
                  SAVE-ETH <br />
                  Uniswap
                </span>
                LP to claim 50% <br />
                of all liquidity locks
              </p>
              <Link to="/" className="blue_btn_nn">
                Unlock Wallet
              </Link>
            </div>

            <div className="col-md-5 banner1_img">
              <img src={imgs} alt="globe" className="" />
            </div>

            <div className="clr"></div>
          </div>

          <div className="exchange_three_blc_m">
            <div className="row">
              <br />
              <div className="col-md-3">
                <div className="mid_block_n_c">
                  <img src={icon1} alt="icon1" />
                  <h3>24h LP Rewards</h3>
                  <h4>Locked</h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c active_blc">
                  {/* <img src={require("../images/whatis2_img.png")} alt="icon2" /> */}
                  <img src={icon2} alt="icon2" />
                  <h3>Total Liquidity Locked</h3>
                  <h4>Locked</h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c">
                  <img src={icon3} alt="icon3" />
                  <h3>Your SAV3 Balance</h3>
                  <h4>Locked</h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c active_blc">
                  <img src={icon4} alt="icon4" />
                  <h3>Circulating SAV3 Supply</h3>
                  <h4>Locked</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="the_pools">
            <h3>
              4% of all transfers are forever locked into liquidity
              <span>
                <Link to="/">See the Pools</Link>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
