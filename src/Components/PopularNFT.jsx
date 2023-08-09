import React, { useEffect, useState } from 'react'
import './PopularNFT.css'
import data from './ProjectsData.jsx'
// import { FaCircle } from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PopularNFT = ({darkMode}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 980 },
          items: 3
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
        <div style={{marginLeft: "10px", marginBottom: "50px"}}>
            <Carousel responsive={responsive}>
                {project.map((item) => {
                    return <li key={item.id} className="project-cards">
                    <img src={item.image} alt="" />
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <div style={{marginLeft: "25px"}}>
                            <p className={darkMode ? "project-username-dark" : "project-username"}>{item.username}</p>
                            <p className={darkMode ? "project-topic-dark" : "project-topic"}>{item.head}</p>
                        </div>
                        <div style={{marginRight: "25px", textAlign: "right"}}>
                            <p className={darkMode ? "project-username-dark" : "project-username"} >{item.current}</p>
                            <p className={darkMode ? "project-topic-dark" : "project-topic"} >{item.price}</p>
                        </div>
                    </div>
                    <p className={darkMode? "project-body-text-dark" : "project-body-text"}>{item.body}</p>
                    <p className="buy-btn-nft">Buy </p>
                </li>
                        })}
            </Carousel>
        </div>
        

{/* 
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
            </div> */}

    </div>
  )
}

export default PopularNFT