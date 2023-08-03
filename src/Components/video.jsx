import React, { useEffect, useState } from 'react';
import data from './PodcastData';
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const Play = ({darkMode})=>{
    const [podcast, setPodcast] = useState(data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 980 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 980, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <div className={darkMode ? 'play-dark' : 'play'}>
            <h3> Kryptonig Podcast</h3>
            <p>Get updates on latest trends from the creators’ world</p>

            <Carousel responsive={responsive}>
                {podcast.map((item, itemIndex)=> {
                        const {id, link} = item

                        return (
                            <div style={{marginTop: "30px", borderRadius: "30px"}} key={id}>
                                <iframe
                                    style={{borderRadius: "50px"}} 
                                    width="300" 
                                    height="315" 
                                    src={link}
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                    
                                </iframe>
                            </div>
                        )
                    })}
            </Carousel>
            
        </div>
    )
}
export default Play