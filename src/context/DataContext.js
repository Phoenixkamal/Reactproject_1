import { createContext, useState } from "react";

const DataContext = createContext({})


export function DataProvider({children}){
    const anime = {
        animationName: "content-1-animation",
        animationDuration: "1s"
    }
    const section_6_anime = {
        animationName: "section_6_anime",
        animationDuration: ".3s"
    }
    const anime_calender = {
        animationName: "calender_anime",
        animationDuration: ".5s"
    }
    const fadeAnime = {
        animationName: "fade_anime",
        animationDuration: "2s"
    }
    const sec_6_fadeAnime = {
        animationName: "fade_anime",
        animationDuration: ".1s"
    }
    const pad_anime = {
        animationName:"scale_anime",
        animationDuration:"1s"
    }
    const [anime_1,setanime_1] = useState({})
    const [anime_2,setanime_2] = useState({
        visibility: "hidden"
    })
    const [anime_3,setanime_3] = useState({
        visibility: "hidden"
    })

    const [scrollAnime_1 , setScrollAnime_1] = useState({})
    const [scrollAnime_2 , setScrollAnime_2] = useState({})
    const [FadeAnime_1,setFadeAnime_1] = useState({
        opacity:"0"
    })
    const [FadeAnime_2,setFadeAnime_2] = useState({
        opacity:"0"
    })
    const [box1,setBox1] = useState({opacity:"0"})
    const [box2,setBox2] = useState({opacity:"0"})
    const [box3,setBox3] = useState({opacity:"0"})

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
                    setTimeout(()=>{setPadAnime1(pad_anime)},100)
                },100)
                setTimeout(()=>{
                    setBox2(sec_6_fadeAnime)
                    setTimeout(()=>{setPadAnime2(pad_anime)},100)
                },400)
                setTimeout(()=>{
                    setBox3(sec_6_fadeAnime)
                    setTimeout(()=>{setPadAnime3(pad_anime)},100)
                },800)
            },500)
        } 
        }
   
    window.addEventListener('scroll', myScrollfn)
    
    return(
    <DataContext.Provider 
        
        value={
            {
                scrollAnime_1,
                scrollAnime_2,
                FadeAnime_1,
                FadeAnime_2,
                box1,
                box2,
                box3,
                padAnime1,
                padAnime2,
                padAnime3,
                pad_anime,
                sec_6_fadeAnime,
                section_6_anime,
                anime_calender ,
                fadeAnime,
                anime,
                anime_1,
                anime_2,
                anime_3,
                setanime_1,
                setanime_2,
                setanime_3
            }
        }>
        {children}
    </DataContext.Provider>
    )
}


export default DataContext
