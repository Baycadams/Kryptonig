import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react'
import data from './ProjectsData'
import { FaCircle } from 'react-icons/fa';




const Projects = ()=>{
    const [project, setProject] = useState(data)
    const [index, setIndex] = React.useState(0)

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > project.length - 1) {
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
       <div className="projects">
           <h3>Projects on our Radar</h3>
           <div className="section-center">
                {project.map((item, itemIndex)=> {
                    const {id, head, image, body, button} = item

                    let position = 'nextSlide'
                        if (itemIndex === index) {
                            position = 'activeSlide'
                        }
                        if (
                            itemIndex === index - 1 ||
                            (index === 0 && itemIndex === project.length - 1)
                        ) {
                            position = 'lastSlide'
                        }

                    return (
                        <article className={position} style={{display: "flex", justifyContent: "center"}} key={id}>
                            <div className='div'>
                                <img style={{height: "55%", width: "100%", display: "flex", justifyContent: "center"}} src={image} alt="" />
                                <h5>{head}</h5>
                                <h6>{body}</h6>
                                <p>{button}</p>
                            </div>
                        </article>
                    )
                })}

            </div>

            <div className="dot-center1">
                

                {project.map((item, itemIndex)=> {
                    const {id} = item

                    let colour = 'grey'
                        if (itemIndex === index) {
                            colour = '#F39333'
                        }

                    return (
                        <div className='dots1' key={id}>
                            <FaCircle style={{width: "120px", height: "120px"}} color={colour} />
                        </div>
                    )
                })}
            </div>
       </div>
    )
}
export default Projects