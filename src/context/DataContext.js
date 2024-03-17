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
    
    return(
    <DataContext.Provider 
        
        value={
            {
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
