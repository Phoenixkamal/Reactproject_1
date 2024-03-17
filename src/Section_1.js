import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import LaptopImg from './images/laptop-image.png'
import DataContext from './context/DataContext';

const Section_1 = () => { 
    const {anime,anime_1,anime_2,anime_3,setanime_1,setanime_2,setanime_3} = useContext(DataContext)
    
    const circle_anime ={
        animationName: "content-2-animation",
        animationDuration: ".7s"
    }
    const [circle_1,setCircle_1] =useState({
        visibility: "hidden"
    })
    const [circle_2,setCircle_2] =useState({
        visibility: "hidden"
    })
    const [circle_3,setCircle_3] =useState({
        visibility: "hidden"
    })
    const [circle_4,setCircle_4] =useState({
        visibility: "hidden"
    })

    useEffect(
        ()=>{
            setanime_1(anime)
            setTimeout(()=>{
                setanime_2(anime)
                setCircle_3(circle_anime)
                setCircle_4(circle_anime)
                
            },500)
            setTimeout(()=>{
                setanime_3(anime)
                setCircle_2(circle_anime)
            },700)
            setTimeout(()=>{
                setCircle_1(circle_anime)
            },800)

        }
    ,[])
  return (
        <div className='section-1-container'>
            <div className="section-1-content">
                <div className="total-center">
                    <div  className="content-1">
                        <div className="contents">
                            <div className="heading" style={anime_1}>
                                <h1>Manage your calendar stress free.</h1>
                            </div>
                            <div className="para" style={anime_2}>
                                <p>
                                Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of.
                                </p>
                            </div>
                            
                            <div className="cus-home-btn" style={anime_3}>
                                <button className="start-now-btn start-now-btn-cus">Start now
                                <div className="arrow d-inline">
                                <FaArrowRight />
                                </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-center ">
                    <div  className="content-2">
                        <div className="laptop-img">
                            <img src={LaptopImg} alt="laptop" />
                        </div>
                        <div className="circles">
                            <div className="circle-1" style={circle_1}></div>
                            <div className="circle-2" style={circle_2}></div>
                            <div className="circle-3" style={circle_3}></div>
                            <div className="circle-4" style={circle_4}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Section_1