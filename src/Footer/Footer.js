import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { PiTwitterLogoFill } from "react-icons/pi";
import { FaBasketball } from "react-icons/fa6";
import { FaOctopusDeploy } from "react-icons/fa";
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-contents">
                <div className="footer-content-1">
                    <div className="copy-desc">
                        <p>
                        © 2021 Solis, Inc. All Rights reserved
                        </p>
                    </div>
                </div>
                <div className="footer-content-2">
                    <ul className="social-icons">
                       <li>
                       <RiInstagramFill />
                        </li>
                        <li>
                        <PiTwitterLogoFill />    
                        </li>
                        <li>
                        <FaOctopusDeploy />
                        </li>
                        <li>
                        <FaBasketball />    
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer