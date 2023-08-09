import React, { useState, useEffect } from 'react';
import Hero from '../Hero-section';
import Projects from '../projects';
import Play from '../video';
import Footer from '../Footer';
import Navbar from '../Navbar';
import HomeBlog from '../homeBlog'; 
import FeaturedOn from '../FeaturedOn';
import ReactGA from 'react-ga4';


const Home = ()=>{

     useEffect(() => {
          ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'Home Page'})
     }, [])
    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}
    return(  
       <div className={`section ${backgroundd}`}> 
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Hero darkMode= {darkMode}/>
            <Projects darkMode= {darkMode}/>
            <Play darkMode= {darkMode}/>
            <HomeBlog darkMode= {darkMode}/>
            <FeaturedOn darkMode= {darkMode} />
            <Footer darkMode= {darkMode}/>
       </div>
    )
}
export default Home