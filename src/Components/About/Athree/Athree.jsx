import React from 'react'
import image from "../../../assets/Timeline-v1.21-1179x1536.png"
import "./three.css"
const Athree = () => {
  return (
    <div className='three'>
        <div className='heading'>
        <h1 className='Ts1'>TimeLine</h1>
        </div>
        <div className='secHeading'>
            <h2 className='Ts2'>Our Story so far ....</h2>
        </div>
        <div className='image'>
            <img className='img' src={image} alt="" />
        </div>
    </div>
  )
}

export default Athree