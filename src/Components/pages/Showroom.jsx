import React, { useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ShowroomHead from '../ShowroomHead'
import NewProject from '../NewProject'
import { useState } from 'react'
import '../NewProject.css'
import ReactGA from 'react-ga4';


const Showroom = () => {

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search, title: 'NFT Showroom'})
}, [])
    const [darkMode, setDarkMode] = useState(false)
    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}
  return (
    <div  className={`section ${backgroundd}`}>
        <Navbar darkMode= {darkMode} setDarkMode={setDarkMode}/>
        <ShowroomHead darkMode={darkMode} />
        <NewProject darkMode= {darkMode}/>
        <Footer darkMode= {darkMode} />
    </div>
  )
}

export default Showroom