import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails'
import PostText from '../Post-text';
import Comment from '../Comment';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { format, formatDistance } from 'date-fns';
import HomeBlog from '../homeBlog';

const Featured = ()=>{

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