import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Blog.css';






const ImageSlider = ({darkMode}) => {

  const [tagIndex, setTagIndex] = useState(0)


  return (
      <div>
         
        {/* {websiteBlog.map((websiteBlog) => {
          return (
            <div key={websiteBlog.id}  style={{backgroundImage: `url(${websiteBlog.imageURL})`, backgroundSize: '80% 80%', marginLeft:"10%", marginRight: "10%"}}>       
          <div className="all">
            <div className="feat">
              featured
            </div>
            <div className="date-publish">
              <span className="publisher">{websiteBlog.author}</span>
              <span className="date">{websiteBlog.date}</span>
            </div>    
              
            <div className="create">
              <p>
                {websiteBlog.title}
              </p>
            </div>
          </div>
          
        </div>
          )
        })} */}

        <div style={{gap: '10px', paddingTop: '25px'}}>
          <p className="crea">Create blog post</p>
          <p className={darkMode ? "listen-dark" : "listen"}>Listen to Podcast</p>
        </div>
         
          
          
      </div>
  );
};

export default ImageSlider;
