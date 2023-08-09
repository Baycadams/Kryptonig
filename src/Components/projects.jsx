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
       <div style={{marginLeft: "40px", marginBottom: "50px", marginTop: "100px" }}>

        <div className="home-flex-container">
            <div>
                <h3 className={darkMode ? "home-header-text-dark" : "home-header-text"}>
                    FACTS ABOUT THE CREATOR ECONOMY
                </h3>
                <ul className={darkMode ? "unordered-list-dark" : "unordered-list"}>
                    <li>Market size -  <span>$104.2 billion and growing</span></li>
                    <li>Contributors -  <span>50 million people and counting </span></li>
                    <li>Full-time Creators - <span>450k and more</span></li>
                </ul>
            </div>
            <div>
                <h3 className={darkMode ? "home-header-text-dark" : "home-header-text"}>
                    DID YOU KNOW?
                </h3>
                <ul className={darkMode ? "unordered-list-dark" : "unordered-list"}>
                    <li>The creator economy is the output of human expression at all levels</li>
                    <li>One out of every four humans is creating something new</li>
                    <li>Gen Z makes up 13% of the total creator population</li>
                    <li>67% of creators have between 1,000 and 10,000 followers on social media</li>
                    <li>An estimated 46 million creators is yet to break even in their creator journey</li>
                </ul>
            </div>
        </div>
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