import React, { useContext, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import DataContext from '../context/DataContext';
import './Section_6.css'


const Section_6 = () => {
  const { sec_6_fadeAnime,section_6_anime} = useContext(DataContext)
  const [scrollAnime_1 , setScrollAnime_1] = useState({})
  const [scrollAnime_2 , setScrollAnime_2] = useState({})
  const [FadeAnime_1,setFadeAnime_1] = useState({
      opacity:"0"
  })
  const [FadeAnime_2,setFadeAnime_2] = useState({
      opacity:"0"
  })


  function myScrollfn() {
      if (window.scrollY > 2390 ) {
          setTimeout(()=>{
              setFadeAnime_1(sec_6_fadeAnime)
              setScrollAnime_1(section_6_anime)
          },0)
          setTimeout(()=>{
              setFadeAnime_2(sec_6_fadeAnime)
              setScrollAnime_2(section_6_anime)
          },300)
      } 
      }
 
  window.addEventListener('scroll', myScrollfn)
  return (
    <div className='section-6'>
      <div className="sec-6-container">
        <div className="sec-6-contents">
          <div className="sec-6-content-header">
            <div className="header-contents">
              <div className="sec-6-heading" style={FadeAnime_1}>
                <h1 style={scrollAnime_1}>
                  Simple Pricing
                </h1>
              </div>
              <div className="sec-6-brief" style={FadeAnime_2}>
                <p style={scrollAnime_2}>
                Start for free and scale with the Pro plan. With Solis, you can focus on your calendar instead of fees.
                </p>
              </div>
            </div>
          </div>
          <div className="sec-6-content-body">
            <div className="mycard-deck">
              <div className="card-1" style={{...FadeAnime_1,...scrollAnime_1}}>
                <div className="card-details">
                  <div className="brief-1">
                    <div className="head">
                      <h6>
                        Free
                      </h6>
                    </div>
                    <div className="brief">
                      <p>
                        Perfect for getting started.
                      </p>
                    </div>
                  </div>
                  <div className="brief-2">
                    <div className="price">
                      <h4>
                        $0
                      </h4>
                    </div>
                    <div className="brief">
                      <p>
                        free forever
                      </p>
                    </div>
                  </div>
                  <div className="line">

                  </div>
                  <div className="brief-3">
                    <ul className="list-item">
                      <li>
                        <div className="check-icon"><FaCheck /></div>
                        <div className="item">1 calendar set</div>
                      </li>
                      <li>
                        <div className="check-icon"><FaCheck /></div>
                        <div className="item">Multi-language</div>
                      </li>
                      <li>
                        <div className="check-icon"><FaCheck /></div>
                        <div className="item">Free mac app</div>
                      </li>
                    </ul>
                  </div>
                  <div className="brief-4">
                    <div className="sec-6-card-btn">
                      <button className="sec-6-btn">
                        Sign up for free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-base" style={{...FadeAnime_2,...scrollAnime_2}}>
                <div className="card-2">
                  <div className="card-details">
                    <div className="child-1">
                      <div className="head">
                        <h6>
                          Pro
                        </h6>
                      </div>
                      <div className="brief">
                        <p>
                          Full featured
                        </p>
                      </div>
                    </div>
                    <div className="child-2">
                      <div className="price">
                        <h4>
                        $49
                        </h4>
                      </div>
                      <div className="brief">
                        <p>
                          per month
                        </p>
                      </div>
                    </div>
                    <div className="card-2-line">
                    
                  </div>
                    <div className="child-3">
                      <ul className="list-item">
                        <li>
                          <div className="check-icon"><FaCheck /></div>
                          <div className="item">Unlimited sets</div>
                        </li>
                        <li>
                          <div className="check-icon"><FaCheck /></div>
                          <div className="item">Multi-language</div>
                        </li>
                        <li>
                          <div className="check-icon"><FaCheck /></div>
                          <div className="item">Automation features</div>
                        </li>
                        <li>
                          <div className="check-icon"><FaCheck /></div>
                          <div className="item">Team features</div>
                        </li>
                        <li>
                          <div className="check-icon"><FaCheck /></div>
                          <div className="item">Every platform app</div>
                        </li>
                      </ul>
                    </div>
                    <div className="child-4">
                      <div className="sec-6-card-btn">
                        <button className="btn">
                        Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_6