import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails'
import PostText from '../Post-text';
import Comment from '../Comment';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ReactGA from 'react-ga4';
import { useParams } from 'react-router-dom';

const Featured = ()=>{
    const {title} = useParams();

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: title})
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
        <div className={backgroundd} style={{position: 'relative'}}> 
           <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
           <BlogDetails darkMode={darkMode} />
           <PostText darkMode= {darkMode}/>
           <Comment darkMode= {darkMode}/>
           {/* <HomeBlog /> */}
           <Footer/>
        </div>
    )
}
export default Featured