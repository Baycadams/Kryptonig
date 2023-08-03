import React from 'react';
import ImageSlider from './slides';
import './Blog.css';    

const Slider = ({darkMode})=>{

    return(
        <div className="slider-container">
            <ImageSlider darkMode={darkMode}/>
            
        </div>
       
    )
} 
export default Slider