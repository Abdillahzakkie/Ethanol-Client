import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import imgs from "../images/main_banner_img.png";
import icon1 from "../images/whatis1_img.png";
import icon2 from "../images/whatis2_img.png";
import icon3 from "../images/whatis3_img.png";
import icon4 from "../images/whatis4_img.png";
import { web3Context } from "../components/Context";

function HomePage(props) {
  const [totalRewards, setTotalRewards] = useState('Locked');
  const web3Consumer = useContext(web3Context);
  const { 
    loading,
    connectWallet, 
    balance, 
    totalSupply,
    claimableRewards,
    walletBalance
  } = web3Consumer;

  useEffect(() => {
    if(loading) return;
    (async () => {
      const result = await claimableRewards();
      setTotalRewards(result)
    })()
  }, [loading, claimableRewards])

  return (
    <div>
      <div className="top_m_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7 banner1_img_t">
              <h2>
                CASH BACK{" "}
                <span className="reward">
                  REWARDS <br /> ON GAS FEES
                </span>
              </h2>
              <p>
                Hodl{" "}
                <span>
                  ENOL-ETH <br />
                  UNISWAP
                </span>{" "}
                LP to claim 50% <br />
                OF LP REWARDS DAILY
              </p>
              <div>
                <Link to="/" className={loading ? "blue_btn_nn" : "hide"} onClick={() => connectWallet()}>
                  Unlock Wallet
                </Link>
                <Link to="/" className="blue_btn_nn">
                  WITHDRAW REWARDS
                </Link>
              </div>
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
                  <p>{loading ? totalRewards : `0.00 Enol`}</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c active_blc">
                  {/* <img src={require("../images/whatis2_img.png")} alt="icon2" /> */}
                  <img src={icon2} alt="icon2" />
                  <h3>Total Liquidity Locked</h3>
                  <p>
                    {loading ? 'Locked' : `${Number.parseFloat(walletBalance).toFixed(4)} Enol`}
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c">
                  <img src={icon3} alt="icon3" />
                  <h3>Your Enol Balance</h3>
                  <p>
                    {loading ? 'Locked' : `${balance}.00 Enol`}
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mid_block_n_c active_blc">
                  <img src={icon4} alt="icon4" />
                  <h3>Circulating Enol Supply</h3>
                  <p>
                    {loading ? 'Locked' : `${totalSupply}.00 Enol`}
                  </p>
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
