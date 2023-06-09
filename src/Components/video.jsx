import React from 'react';

import './Home.css'

const Play = ()=>{
    return(
        <div className='play'>
            <h3> Kryptonig Podcast</h3>
            <div className="you">
            <iframe 
            width="200" 
            height="315" 
            src="https://www.youtube.com/embed/GTQLPTqPSK8" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="dots">
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>
        </div>
    )
}
export default Play