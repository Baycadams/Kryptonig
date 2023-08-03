import React from 'react'
import Navbar from '../Navbar'
import ShowroomHead from '../ShowroomHead'
import { useState } from 'react'
import LandingPageText from '../LandingPageText'
import NewProject from '../NewProject'
import Footer from '../Footer'

const ShowroomLandingPage = () => {
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