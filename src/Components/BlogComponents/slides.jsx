import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Blog.css';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: 'images/slide1.jpg',
      featured:'featured',
      name:'Evans',
      datePub:'14th Jan 2023',
      create:'The Creator Economy; How web3 Creators Surviving',
      text:'How was the feeling when you decided to go into crypto? How did you cope with all those charts, those never-ending analyses? You probably saw how much you can lose if the market goes against you and wondered if you would be able to cope.'
    },
    {
      src: 'images/slide2.jpg',
      featured:'featured',
      name:'Evans',
      datePub:'14th Jan 2023',
      create:'Understanding the DAO Model in Web3',
      text:'The Concept of Decentralized Autonomous Organizations (DAOs) has been growing in popularity and usage within the Web3 space. You probably heard of CityDAO that acquired 40 acres of land in Wyoming in November 2021; '
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex =>
        (currentImageIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
      <div>
          <Link to={images[currentImageIndex].linkto}>
          <div className='slide'
      
      style={{
          backgroundImage: `url(${images[currentImageIndex].src})`,
      }}
        >
         <div className="all">
         <div className="feat">{images[currentImageIndex].featured}</div>
            <div className="date-publish">
              <span className="publisher">{images[currentImageIndex].name}</span>
              <span className="date">{images[currentImageIndex].datePub}</span>
            </div>    
  
            <div className="create">
                <p>
                {images[currentImageIndex].create}
                 </p>
            </div>
            <div className="pp">
               {images[currentImageIndex].text}
            </div>
         </div>
      </div>
          </Link>
      </div>
  );
};

export default ImageSlider;
