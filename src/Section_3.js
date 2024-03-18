import React, { useContext, useState } from 'react'
import calender_img from './images/calender-img.png'
import { FaArrowRight } from "react-icons/fa6";
import DataContext from './context/DataContext';
import Section_4 from './Section_4';


const Section_3 = () => {
    const {anime_calender} = useContext(DataContext)

    const [scrollAnime , setScrollAnime] = useState({})
  
    function myScrollfn() {
        if (window.scrollY > 290) {
            setTimeout(()=>{setScrollAnime(anime_calender)},1000)
        } 
        }
   
        window.addEventListener('scroll', myScrollfn)
  return (
    <div className="flex-item" style={scrollAnime}>
        <div className="section-3">
            <div className="sec-3-container">
                <div className="sec-3-contents">
                    <div className="sec-3-content-1">
                        <div className="calender-img">
                            <img src={calender_img} alt="calender" />
                        </div>
                    </div>
                    <div className="sec-3-content-2">
                        <div className="content-wrap">
                            <div className="content">
                                <div className="heading">
                                    <h2>
                                    Your calendar is broken
                                    </h2>
                                </div>
                                <div className="para">
                                    <p>
                                    Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of
                                    </p>
                                </div>
                                <div className="pointer-link">
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
                </div>
            </div>
        </div>
        <Section_4/>
    </div>
  )
}

export default Section_3