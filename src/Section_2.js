import React, { useContext, useEffect, useState } from 'react'
import Logoipsum_1 from './images/logoipsum_1.svg'
import Logoipsum_2 from './images/logoipsum_2.svg'
import Logoipsum_3 from './images/logoipsum_3.svg'
import Logoipsum_4 from './images/logoipsum_4.svg'
import Logoipsum_5 from './images/logoipsum_5.svg'
import DataContext from './context/DataContext'

const Section_2 = () => {
    const {anime,fadeAnime} = useContext(DataContext)
    const [scrollAnime_1 , setScrollAnime_1] = useState({})
    const [scrollAnime_2 , setScrollAnime_2] = useState({})
    const [FadeAnime,setFadeAnime] = useState({
        opacity:"0"
    })

    function myScrollfn() {
        if (window.scrollY > 100) {
            setTimeout(()=>{
                setFadeAnime(fadeAnime)
                setTimeout(()=>{setScrollAnime_1(anime)},100)
                setTimeout(()=>{setScrollAnime_2(anime)},200)

            },1000)
            
        } 
        }
   
        window.addEventListener('scroll', myScrollfn)

  return (
    <div className='section-2' style={FadeAnime}>
        <div className="section-2-container">
            <div className="sec-2-content-1"  style={scrollAnime_1}>
                <div className="heading">
                    <h3>
                    Join these companies in saving hundreds of hours a year
                    </h3>
                </div>
            </div>
            <div className="sec-2-content-2" style={scrollAnime_2}>    
                <div className="flex-group">
                    <div className="logoipsum-1">
                        <img src={Logoipsum_1} alt="img-1" />
                    </div>
                    <div className="logoipsum-2">
                        <img src={Logoipsum_2} alt="img-2" />
                    </div>
                </div>
                <div className="flex-group">
                    <div className="logoipsum-3">
                        <img src={Logoipsum_3} alt="img-3" />
                    </div>
                    <div className="logoipsum-4">
                        <img src={Logoipsum_4} alt="img-4" />
                    </div>
                </div>
                <div className="logoipsum-5">
                    <img src={Logoipsum_5} alt="img-5" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Section_2