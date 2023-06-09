import React from 'react';
import Phone from '../phone';
import Dream from '../dream';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';

const About = ()=>{
    return(
        <div>
            <Navbar/>
            <Phone/>
            <Dream/>
            <More/>
            <Logo/>
            <Footer/>
        </div>

    )
}
export default About