import React from 'react'
import image from "../../../assets/Group-47258.png"
import "./one.css"

const Aone_one = () => {
  return (
    <div className="About">
      <div className="Afull">
         <div className="Title">
         <h1 className="T1">CREATIVE VISION</h1>
        <h1 className="T2">
          Many people imagine...
          <br />
          Some ideate...
          <br />
          But, few have the dedication to pursue their <br /> imagination into
          reality…... We DO!!!
        </h1>
         </div>
        <div className="para">
        <p className="p1">
          We are a team of technology experts and process consultants in <b> Waste
          Management, Healthcare, Recycling, Business Automation and Enterprise
          Resource Planning </b>. We are a highly collaborative and supportive team,
          coming together on every single project to ensure our clients get the
          very best out of each of us. Making a difference counts and it’s at
          the forefront of our minds on every proposal we undertake.
        </p>
        <p className="p2">
          Our imagination gave birth to revolutionary concepts, which have today
          been channelized into unique products aimed at consumers and
          enterprises.
        </p>
        </div>
      </div>
      <div className="Image">
        <img src={image} className="im" alt="" />
      </div>
    </div>
  )
}

export default Aone_one