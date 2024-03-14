import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import LaptopImg from './images/laptop-image.png'
import { Row,Col } from 'react-bootstrap';

const Section_1 = () => {
  return (
    <div className='section-1-container total-center container-lg'>
        <Row className="section-1-content">
            <Col lg={6} md={6} className="content-1  ">
                <div className="heading">
                    <h1>Manage your calendar stress free.</h1>
                </div>
                <div className="para">
                    <p>
                    Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of.
                    </p>
                </div>
                
                <div className="cus-home-btn">
                    <button className="start-now-btn cus-box-shad">Start now
                    <div className="arrow d-inline">
                    <FaArrowRight />
                    </div>
                    </button>
                </div>
            </Col>
            <Col lg={6} md={6} className="content-2">
                <div className="laptop-img">
                    <img src={LaptopImg} alt="laptop" />
                </div>
                <div className="circles">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                    <div className="circle-4"></div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Section_1