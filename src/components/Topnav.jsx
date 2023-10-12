import React from "react";
import "../Styles/topnav.css";
import car from "../images/car.svg";
import facebook from "../images/facebook.svg";
import linkedIn from "../images/linkedIn.svg";
import tw from "../images/tw.svg";
import insta from "../images/insta.svg";

function Topnav() {
  return (
    <div className="topcontainer">
      <div className="one">
        <div className="two">
          <div className="four">
            <img src={car} alt="" /> Free Delivery
          </div>
          <div className="five">Return Policy</div>
        </div>
        <div className="three">
          <div>Login</div>
          <div>follow Us</div>
          <div>
            <img className="socialimg" src={facebook} alt="facebook" />
          </div>
          <div>
            <img className="socialimg" src={linkedIn} alt="linkedIn" />
          </div>
          <div>
            <img className="socialimg" src={tw} alt="twitter" />
          </div>
          <div>
            <img className="socialimg" src={insta} alt="insta" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
