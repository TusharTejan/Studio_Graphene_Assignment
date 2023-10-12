import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/singlepage.css";

const SinglePage = (el) => {
  return (
    <div key={el.id}>
      <div className="display-data">
        <img className="api-image" src={el.image} />
        <p className="pd-name">{el.title}</p>
        <p className="pd-name">{el.category}</p>
        <p className="pd-des">{el.description}</p>
        <p className="pd-price">${el.price}</p>
      </div>
    </div>
  );
};

export default SinglePage;
