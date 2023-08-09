import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails'
import PostText from '../Post-text';
import Comment from '../Comment';
import Footer from '../Footer';
import Navbar from '../Navbar';
import HomeBlog from '../homeBlog';
import ReactGA from 'react-ga4';

const Featured = ()=>{

    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'BlogPost Page'})
   }, [])
    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}


    return(
        <div className={backgroundd}> 
           <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
           <BlogDetails darkMode={darkMode} />
           <PostText darkMode= {darkMode}/>
           <Comment/>
           {/* <HomeBlog /> */}
           <Footer/>
        </div>
    )
}
export default Featured