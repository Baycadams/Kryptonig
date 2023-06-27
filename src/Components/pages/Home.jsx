import React from 'react';
import Hero from '../Hero-section';
import Illustrator from '../illustrator';
import Projects from '../projects';
import Play from '../video';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import HomeBlog from '../homeBlog';


const Home = ()=>{
    return(
       <div className="section">
            <Navbar/>
            <Hero/>
            <Illustrator/>
            <Projects/>
            <Play/> 
            <HomeBlog />
            <More/>
            {/* <Logo/> */}
            
            <Footer/>
       </div>
    )
}
export default Home