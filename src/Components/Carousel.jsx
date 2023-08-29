import { collection, onSnapshot } from '@firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { db } from '../firebase';


const CarouselSlide = ({darkMode}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 980 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 980, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const [websiteBlog, setWebsiteBlog] = useState([])

      useEffect(()=>{
          
        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
          setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      })
    
      }, [])
    


    return(
       <div style={{marginLeft: "10px", marginBottom: "50px"}}>

          
          {/* <Carousel responsive={responsive}>
            {websiteBlog.map((item) => {
              return <div style={{height: "350px", width: "90%"}} key={item.id}> 
                  <img src={item.imageURL} style={{width: "110%", height: "100%", position: "relative", borderRadius: "30px"}} alt="" />
                  <p className='blog-carousel-title'>{item.title}</p>
                </div>
              })}
          </Carousel> */}
                
       </div>
    )
}

export default CarouselSlide