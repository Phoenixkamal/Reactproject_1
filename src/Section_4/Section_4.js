import React, { useContext, useState } from 'react'
import calender_img from '../images/calender-2.png'
import { FaArrowRight } from "react-icons/fa6";
import './Section_4.css'


const Section_4 = () => {
  return (
    <div className="section-3">
    <div className="sec-3-container">
        <div className="sec-3-contents">
        <div className="sec-3-content-2">
                <div className="content-wrap">
                    <div className="content">
                        <div className="heading">
                            <h2>
                            We're here to fix it
                            </h2>
                        </div>
                        <div className="para">
                            <p>
                            Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of.
                            </p>
                        </div>
                        <div className="pointer-link" >
                            <span className="start-now-link">
                                Start now
                            </span>
                            <span className="arrow">
                            <FaArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-3-content-1 specific-for-sec-4">
                <div className="calender-img">
                    <img src={calender_img} alt="calender" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Section_4