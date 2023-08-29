import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import ShowroomHead from '../ShowroomHead'
import { useState } from 'react'
import LandingPageText from '../LandingPageText'
import NewProject from '../NewProject'
import Footer from '../Footer'
import ReactGA from 'react-ga4';

const ShowroomLandingPage = () => {

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'NFT Showroom Landing Page'})
}, [])
useEffect(()=> {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}, [])

    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}
  return (
    <div className={`section ${backgroundd}`}>
        <Navbar darkMode= {darkMode} setDarkMode={setDarkMode}/>
        <ShowroomHead darkMode={darkMode} />
        <LandingPageText darkMode={darkMode} />
        <NewProject darkMode= {darkMode}/>
        <Footer darkMode={darkMode} />
    </div>
  )
}

export default ShowroomLandingPage