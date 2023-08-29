import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


import './Blog.css'

const BlogPost = ({darkMode, blogImg, publish, date, tittle, content, crypto,tech, id, handleFilter}) => {

    
  return ( 
 
    <div>
        <div className="new-blog-posts">
            <img src={blogImg} alt="" />
            <div className="tag-flex">
                <p className="tag-background">
                   {crypto}
                </p>
                <p className="min-read">
                    5 mins read
                </p>
            </div>
            <div className={darkMode ? "tittle-dark" : "tittle"}>
                    {tittle}
                </div>
                <div className={darkMode ? "content-dark" : "content"}>
                    {content}
                </div>
                <div style={{marginTop: '-150px', position: 'absolute', bottom: '0'}}>
                <NavLink className='nav-link-flex' exact to={`/blog/${tittle}/${id}`} id={id} onClick={()=>handleFilter(id)}>
                    <p  className='read-more-button'>Read more <FaChevronRight className='chevron' /> </p>
                    
                </NavLink>
            </div>
                
        </div>
            {/* <div className="blog-post">
            <div className="blogImg">
                <img src={blogImg} alt="" />
            </div>
            <div className="textPlace">
                <div className={darkMode ? "date-publish2-dark" : "date-publish2"}>
                    <span>{publish}, {date}</span>
                    <span>5mins read</span>
                </div>
                <div className={darkMode ? "tittle-dark" : "tittle"}>
                    {tittle}
                </div>
                <div className={darkMode ? "content-dark" : "content"}>
                    {content}
                </div>
                <div className="ct">
                    <span>{crypto}</span>
                    <span>{tech}</span>
                </div>
            </div>
        </div> */}
    </div> 
  );
}

export default BlogPost;

