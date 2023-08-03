import React from 'react';
import Phone from '../phone';
import Dream from '../dream';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useState } from 'react';

const About = ()=>{
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