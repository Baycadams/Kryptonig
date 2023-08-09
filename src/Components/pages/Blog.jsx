import React, { useEffect } from 'react';
import Slider from '../BlogComponents/Slider';
import Blogs from '../BlogComponents/blogposts';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../BlogComponents/Blog.css'
import { useState } from 'react';
import CarouselSlide from '../Carousel';
import ReactGA from 'react-ga4';


const Blog = ()=>{

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'Blog Page'})
   }, [])
    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}
    return(
        <div className={backgroundd}> 
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/> 
            <CarouselSlide darkMode={darkMode} />
            <Slider darkMode= {darkMode}/>

            <Blogs darkMode={darkMode}/>
            <div className="create-blogpost1">
                <button className="creat">Create blog post</button>
                <button className={darkMode ? "liste-dark" : "liste"}>Listen to Podcast</button>
            </div>
            <Footer/>
        </div>
    )
}
export default Blog