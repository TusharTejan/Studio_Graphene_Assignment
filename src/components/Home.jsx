import React from "react";
import "../Styles/home.css";
import boy from "../images/boy.svg";
import arrow from "../images/arrow.png";
import star from "../images/star.svg";
import starone from "../images/starone.svg";

function Home() {
  return (
    <div className="mainbox">
      <div className="box">
        <div className="box-1">
          <h1 className="fresh"> Fresh</h1>
          <h1 className="num">2022</h1>
          <h1 className="look">Look</h1>
        </div>
        <div className="box-2">
          <img className="image-1" src={star} alt="" />
          <img className="image-2" src={boy} alt="" />
        </div>
      </div>
      <div className="orangebox"></div>
      {/* <p className="org">OREGON JACKET</p> */}
      {/* <p className="pri">$124</p> */}
      <div className="line"></div>
      <img className="image-3" src={starone} alt="star" />
      <div className="see">
        <div className="seemore">See more</div>
      </div>
      <img className="img" src={arrow} alt="arrow" />
    </div>
  );
}

export default Home;
