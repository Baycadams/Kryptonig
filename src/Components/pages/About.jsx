import React, { useEffect } from 'react';
import Phone from '../phone';
import Dream from '../dream';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useState } from 'react';
import ReactGA from 'react-ga4';


const About = ()=>{

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'About Page'})
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
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Phone darkMode = {darkMode}/>
            <Dream darkMode={darkMode}/>
            <More darkMode={darkMode}/>
            <Logo darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>

    )
}
export default About