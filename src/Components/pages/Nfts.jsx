import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import NFTHeader from '../NFTHeader';
import PopularNFT from '../PopularNFT';
import Footer from '../Footer';
import FeaturedArtworks from '../FeaturedArtworks';
import ReactGA from 'react-ga4';



const Nfts = ()=>{

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'NFT Page'})
   }, [])
   useEffect(()=> {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}, [])

    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'} 
    return( 
        <div className={backgroundd}>
             <Navbar darkMode={darkMode} setDarkMode = {setDarkMode}/>
             <NFTHeader darkMode={darkMode}/> 
             <PopularNFT darkMode={darkMode}/>
             <FeaturedArtworks darkMode={darkMode}/>
             <Footer darkMode={darkMode}/>
        </div>
    )
}
export default Nfts