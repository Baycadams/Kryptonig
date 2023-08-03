import React, { useEffect, useState } from 'react'
import './PopularNFT.css'
import data from './ProjectsData.jsx'
import { FaCircle } from 'react-icons/fa'

const PopularNFT = ({darkMode}) => {
 
  const tag = [
    {
        title: 'Tezos', id: 1
    },
    {
        title: 'Voice', id: 2
    },
    {
        title: 'Opensea', id: 3
    },
    {
        title: 'Polygon', id: 4
    }
]

  const [index, setIndex] = React.useState(0)
  const [project, setProject] = useState(data)
  const [tagIndex, setTagIndex] = useState(0)

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
      <h3 className={darkMode ? "collection-dark" : "collection"}>
      Collection
      </h3>
      <p className={darkMode ? "collection-body-dark" : "collection-body"}>See collection of artworks from your own world that interests</p>

      <div className="tag">
            {tag.map((item, index) => {
                return <div className='item-tag' key={item.id}>
                    <p onClick={()=> setTagIndex(index)} className={`grey ${tagIndex === index  && 'gradient'}`}>{item.title}</p>
                </div>
            })}
        </div>
      <div className="section-center">
                {project.map((item, itemIndex)=> {
                    const {id} = item

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
                        <article className={position} style={{display: "flex", justifyContent: "center", cursor: 'pointer'}} key={id}>

                            <div className="image-container" style={{height: '400px'}}>
                                <div style={{marginTop: '-5px'}}><img src='https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Screenshot%20(242)%202.png?alt=media&token=5c512ab2-7d5a-4468-830b-36263db33ca8' alt="" /></div>
                                
                                <section className={darkMode ? 'landing-page-text-dark' : 'landing-page-text'}>
                                    <div>
                                    <p>Project: <span> Yellow Painting</span></p>
                                    <p>Creator: <span> John Wick</span></p>  
                                    </div>
                                    <div> 
                                    <p >Market: <span>Blockchain</span></p>
                                    <p>Market Size <span>$1 Billion</span></p> 
                                    </div>
                                </section>
                                <p className={darkMode ? 'lorem-ipsum-dark' : 'lorem-ipsum'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam temporibus corrupti possimus. </p>
                                <p className="buy-button">Buy</p>
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

    </div>
  )
}

export default PopularNFT