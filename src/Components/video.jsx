import React, { useEffect, useState } from 'react';
import data from './PodcastData';


import './Home.css'
import { FaCircle } from 'react-icons/fa';

const Play = ()=>{

    const [podcast, setPodcast] = useState(data)
    const [index, setIndex] = React.useState(0)

    useEffect(() => {

        let slider = setInterval(() => {
          setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > podcast.length - 1) {
              index = 0
            }
            return index
          })
        }, 5000)
        return () => {
          clearInterval(slider)
        }

      }, [index])  


    return(
        <div className='play'>
            <h3> Kryptonig Podcast</h3>
          
            <div className="section-center">
                {podcast.map((item, itemIndex)=> {
                    const {id, link} = item

                    let position = 'nextSlide'
                        if (itemIndex === index) {
                            position = 'activeSlide'
                        }
                        if (
                            itemIndex === index - 1 ||
                            (index === 0 && itemIndex === podcast.length - 1)
                        ) {
                            position = 'lastSlide'
                        }

                    return (
                        <article className={position} key={id}>
                            <iframe 
                                width="200" 
                                height="315" 
                                src={link}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                
                            </iframe>
                        </article>
                    )
                })}

            </div>

            <div className="dot-center">
                {/* the dot section */}

                {podcast.map((item, itemIndex)=> {
                    const {id} = item

                    let colour = 'grey'
                        if (itemIndex === index) {
                            colour = '#F39333'
                        }

                    return (
                        <div className='dots' key={id}>
                            <FaCircle color={colour} />
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default Play