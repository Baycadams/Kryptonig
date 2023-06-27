import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';


import './Home.css'


const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="first">
                <div className="footer-logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2Flogo.png?alt=media&token=c69cd70e-00ea-4189-9fe8-4fe4ef948755&_gl=1*1dt378a*_ga*MTg4MjM4NjY4OS4xNjYzMDY3NzUw*_ga_CW55HF8NVT*MTY4NjE1OTg4OS4yNS4xLjE2ODYxNjMxNDEuMC4wLjA." alt="" />
                </div>
                <p style={{fontStyle: 'italic'}}>Kryptonig 2023. All right Reserved</p>
                <div className="social-icons">
                <a href="https://twitter.com/KryptonigLLC?s=09"> 
                <FaTwitter/>
                </a>
               
                <a href="https://www.linkedin.com/company/kryptonig-llc/">
                <FaLinkedin/>
                </a>
                
                </div>
            </div>
            <div className="others">
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/' className='other-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/About' className='other-link'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Service' className='other-link'>
                            Services
                        </NavLink>
                    </li>
                </ul>
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/Nfts' className='other-link'>
                            NFTs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Invest' className='other-link'>
                            Forum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Blog' className='other-link'>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <ul className='other-ul'>
                <li>
                        <NavLink exact to='/' className='other-link'>
                            Terms and Conditions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/' className='other-link'>
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer 