import React from 'react'
import './NewProject.css'
import { FaCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import data from './ProjectsData.jsx'
import { useNavigate } from 'react-router-dom'

const NewProject = ({darkMode}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/showroom-landing-page')
    }

    const tag = [
        {
            title: 'Blockchain', id: 1
        },
        {
            title: 'AI', id: 2
        },
        {
            title: 'Space', id: 3
        },
        {
            title: 'EduTech', id: 4
        }
    ]

    const [project, setProject] = useState(data)
    const [tagIndex, setTagIndex] = useState(0)
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

  return (
    <div>
        <p className={darkMode ? "new-projects-dark" : "new-projects"}> 
            New Projects
        </p>

        <div className="tag">
            {tag.map((item, index) => {
                return <div className='item-tag' key={item.id}>
                    <p onClick={()=> setTagIndex(index)} className={`grey ${tagIndex === index  && 'gradient'}`}>{item.title}</p>
                </div>
            })}
        </div>


        <div className="section-center">
                {project.map((item, itemIndex)=> {
                    const {id, head, image, body, username, current, price} = item

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
                        <article onClick={handleClick} className={position} style={{display: "flex", justifyContent: "center", cursor: 'pointer'}} key={id}>
                            <div className='div'>
                                <img src={image} alt="" />
                                <div style={{display: 'flex', justifyContent: "space-between", marginLeft: '10px', marginRight: '10px'}}>
                                    <div className={darkMode ? 'flexxinng-dark' : 'flexxinng'}>
                                        <h2>{username}</h2>
                                        <h4>{head}</h4>
                                    </div>
                                    <div className={darkMode ? 'flexxinng-dark' : 'flexxinng'}>
                                        <h2>{current}</h2>
                                        <h4>{price}</h4>
                                    </div>
                                </div>
                                
                                <h6 className={darkMode ? 'divH6-dark' : 'divH6'}>{body}</h6>
                            </div>
                        </article>
                    )
                })}

            </div>

            <div className="dot-center1 center">
                

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

            <div className="promote">
                <h3>Our Community promotes like minded investors & Creators</h3>
                <p>Join Community</p>
            </div>
    </div>
  )
}

export default NewProject