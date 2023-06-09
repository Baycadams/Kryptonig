import React from 'react';


import './Blog.css'

const BlogPost = (props) => {
  return (
      <div>
        <div className="blog-post">
            <div className="blogImg">
                <img src={props.blogImg} alt="" />
            </div>
            <div className="textPlace">
                <div className="date-publish2">
                    <span>{props.publish}</span>
                    <span>{props.date}</span>
                </div>
                <div className="tittle">
                    {props.tittle}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="ct">
                    <span>{props.crypto}</span>
                    <span>{props.tech}</span>
                </div>
            </div>
      </div>
     </div> 
  );
}

export default BlogPost;
