import React from 'react';


import './Blog.css'

const BlogPost = ({darkMode, blogImg, publish, date, tittle, content, crypto,tech}) => {

    
  return ( 
 
    <div>
        <div className="blog-post">
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
        </div>


    </div> 
  );
}

export default BlogPost;
