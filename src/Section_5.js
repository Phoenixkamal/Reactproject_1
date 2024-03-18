import React, { useContext, useState} from 'react'
import phone_img from './images/phone.svg'
import ban_img from './images/ban-icon.svg'
import check_box from './images/check-box.svg'
import DataContext from './context/DataContext'


const Section_5 = () => {
    const { sec_6_fadeAnime,section_6_anime ,pad_anime} = useContext(DataContext)
    const [box1,setBox1] = useState({opacity:"0"})
    const [box2,setBox2] = useState({opacity:"0"})
    const [box3,setBox3] = useState({opacity:"0"})
    const [scrollAnime_1 , setScrollAnime_1] = useState({})
    const [scrollAnime_2 , setScrollAnime_2] = useState({})
    const [FadeAnime_1,setFadeAnime_1] = useState({
        opacity:"0"
    })
    const [FadeAnime_2,setFadeAnime_2] = useState({
        opacity:"0"
    })

    const [padAnime1,setPadAnime1] = useState({padding:"0px"})
    const [padAnime2,setPadAnime2] = useState({padding:"0px"})
    const [padAnime3,setPadAnime3] = useState({padding:"0px"})


    function myScrollfn() {
        if (window.scrollY > 1590 ) {
            setTimeout(()=>{
                setFadeAnime_1(sec_6_fadeAnime)
                setScrollAnime_1(section_6_anime)
            },0)
            setTimeout(()=>{
                setFadeAnime_2(sec_6_fadeAnime)
                setScrollAnime_2(section_6_anime)
            },300)

            setTimeout(()=>{
                setTimeout(()=>{
                    setBox1(sec_6_fadeAnime)
                    setTimeout(()=>{setPadAnime1(pad_anime)},0)
                },100)
                setTimeout(()=>{
                    setBox2(sec_6_fadeAnime)
                    setTimeout(()=>{setPadAnime2(pad_anime)},0)
                },400)
                setTimeout(()=>{
                    setBox3(sec_6_fadeAnime)
                    setTimeout(()=>{setPadAnime3(pad_anime)},0)
                },800)
            },500)
        } 
        }
   
    window.addEventListener('scroll', myScrollfn)
    
  return (
    <div className='section-5'>
        <div className="sec-5-container">
            <div className="sec-5-content">
                <div className="header">
                    <div className="heading" style={FadeAnime_1}>
                        <h1 style={scrollAnime_1}>
                            Manage your calendar stress free.
                        </h1>
                    </div>
                    <div className="brief-para" style={FadeAnime_2}>
                        <p style={scrollAnime_2}>
                            Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of.
                        </p>
                    </div>
                </div>
                <div className="sec-5-body">
                    <div className="base">
                        <div className="box-base" style={padAnime1}>
                            <div className="box-overlay">
                                <div className="body-content" style={box1}>
                                    <div className="body-header">
                                        <div className="icon">
                                            <img src={phone_img} alt="icon" />
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                For every device
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <p>
                                            Solis works seamlessly across your Mac, iPad, iPhone, and Apple Watch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-base" style={padAnime2}>
                            <div className="box-overlay">
                                <div className="body-content" style={box2}>
                                    <div className="body-header">
                                        <div className="icon">
                                            <img src={ban_img} alt="icon" />
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                For every device
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <p>
                                            Solis works seamlessly across your Mac, iPad, iPhone, and Apple Watch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-base" style={padAnime3}>
                            <div className="box-overlay">
                                <div className="body-content" style={box3}>
                                    <div className="body-header">
                                        <div className="icon">
                                            <img src={check_box} alt="icon" />
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                For every device
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <p>
                                            Solis works seamlessly across your Mac, iPad, iPhone, and Apple Watch.
                                        </p>
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

export default Section_5