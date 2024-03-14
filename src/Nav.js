import React from 'react'
import logo from './images/logo.png'
import { FaArrowRight } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="mynavbar">
        <div className="navbar-logo total-center">
          <img src={logo} alt="" />
        </div>
        <div className="nav-item-container total-center visible-hidden">
          <ul className="nav-list">
            <li>Pricing</li>
            <li>Features</li>
            <li>Teams</li>
          </ul>
        </div>
        <div className="cus-btn">
          <button className="start-now-btn">Start now
            <div className="arrow d-inline">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav