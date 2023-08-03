import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react'
import data from './ProjectsData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const Projects = ({darkMode})=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
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


    const [project, setProject] = useState(data)

    return(
       <div style={{marginLeft: "40px", marginBottom: "50px"}}>
        <h3 className={darkMode? 'project-radar-dark' : 'project-radar' }>Projects on our Radar</h3>
           <p className={darkMode ? 'projects-p-dark' : 'projects-p'}>We have captured some of the most rewarding projects that will interest you</p>
           <div style={{margin: '0 auto', width: "100%"}}>
           <Carousel responsive={responsive}>
           <li className="project-cards">
                <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FScreenshot%20(248)%201.png?alt=media&token=a0ddb551-6628-4407-91d2-68940303432bg" alt="" />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{marginLeft: "25px"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"}>@Johny</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"}>Yellow Painting</p>
                    </div>
                    <div style={{marginRight: "25px", textAlign: "right"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"} >Current Bid</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"} >0.003ETH</p>
                    </div>
                </div>
                <p className={darkMode? "project-body-text-dark" : "project-body-text"}>Creating art with light and shade, also known as chiaroscour,add an extra dimension to the work. it helps the viewers eyes</p>
            </li>
            <li className="project-cards">
                <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FScreenshot%20(248)%201.png?alt=media&token=a0ddb551-6628-4407-91d2-68940303432b" alt="" />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{marginLeft: "25px"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"}>@Johny</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"}>Yellow Painting</p>
                    </div>
                    <div style={{marginRight: "25px", textAlign: "right"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"} >Current Bid</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"} >0.003ETH</p>
                    </div>
                </div>
                <p className={darkMode? "project-body-text-dark" : "project-body-text"}>Creating art with light and shade, also known as chiaroscour,add an extra dimension to the work. it helps the viewers eyes</p>
            </li>
            <li className="project-cards">
                <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FScreenshot%20(248)%201.png?alt=media&token=a0ddb551-6628-4407-91d2-68940303432b" alt="" />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{marginLeft: "25px"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"}>@Johny</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"}>Yellow Painting</p>
                    </div>
                    <div style={{marginRight: "25px", textAlign: "right"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"} >Current Bid</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"} >0.003ETH</p>
                    </div>
                </div>
                <p className={darkMode? "project-body-text-dark" : "project-body-text"}>Creating art with light and shade, also known as chiaroscour,add an extra dimension to the work. it helps the viewers eyes</p>
            </li>
            <li className="project-cards">
                <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FScreenshot%20(248)%201.png?alt=media&token=a0ddb551-6628-4407-91d2-68940303432b" alt="" />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{marginLeft: "25px"}}> 
                        <p className={darkMode ? "project-username-dark" : "project-username"}>@Johny</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"}>Yellow Painting</p>
                    </div>
                    <div style={{marginRight: "25px", textAlign: "right"}}>
                        <p className={darkMode ? "project-username-dark" : "project-username"} >Current Bid</p>
                        <p className={darkMode ? "project-topic-dark" : "project-topic"} >0.003ETH</p>
                    </div>
                </div>
                <p className={darkMode? "project-body-text-dark" : "project-body-text"}>Creating art with light and shade, also known as chiaroscour,add an extra dimension to the work. it helps the viewers eyes</p>
            </li>
            </Carousel>
        </div>
           

       </div>
    )
}
export default Projects