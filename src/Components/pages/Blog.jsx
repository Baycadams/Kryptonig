import React from 'react';
import Slider from '../BlogComponents/Slider';
import Blogs from '../BlogComponents/blogposts';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Blog = ()=>{
    return(
        <div>
            <Navbar/> 
            <Slider/>
            <Blogs/>
            <More/>
            <Logo/>
            <Footer/>
        </div>
    )
}
export default Blog