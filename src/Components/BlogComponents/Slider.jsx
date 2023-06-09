import React from 'react';
import ImageSlider from './slides';
import './Blog.css';    

const Slider = ()=>{

    return(
        <div className="slider-container">
            <h2>BLOGPOSTS</h2>
            <p className='p'>Thoughts and advice on web3 and the creator economy</p>

            <ImageSlider/>
            
        </div>
       
    )
} 
export default Slider