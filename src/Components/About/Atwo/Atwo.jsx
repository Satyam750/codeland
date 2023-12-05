import React from "react";
import image from "../../../assets/Group-47258.png";
import "./two.css";
const Atwo = () => {
  return (
    <div className="about">
      <div className="image">
        <img src={image} className="im" alt="" />
      </div>
      <div className="afull">
        <div className="title">
          <h1 className="t1">CREATIVE VISION</h1>
          <h1 className="t2">Growing Strong Since 2011</h1>
        </div>
        <div className="Para">
          <p className="P1">
           <b>  CodeLand InfoSolutions was formed in 2011 </b> by like-minded individuals
            with the passion and determination to transform their imagination
            into reality. We are located in India’s IT capital, Bangalore.
          </p>
          <p className="P2">
            With the drive to continue its success as a product company,
            CodeLand aims to become one of the leading product companies in the
            software industry, by pursuing the path of imagination, ideation,
            execution and creation.
          </p>
          <p className="P3">
            The future is full of exciting possibilities with products powered
            by CodeLand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Atwo;
