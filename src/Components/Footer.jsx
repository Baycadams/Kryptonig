import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';


import './footer.css'


const Footer = ({darkMode})=>{
    return(
        <div>

            <div className={darkMode ? 'know-more-dark' : 'know-more'}  id='more'>
                <div className="padding-left"> 
                    <div className="email">
                        <form action="" method="POST"  id="email-form">
                            <input className='in' type="email" name="" id=""  placeholder='Email Address'/>
                            <button>Subcribe</button>
                        </form>
                        <div className="email-success"></div>
                    </div>
                    <p>Don't want to miss out on new trends and products? Join wait-list</p>
                </div>
                
            </div>
            <div className={darkMode ? 'footer-dark' : 'footer'}>
                
                <div className="first">
                    <div className={darkMode ? "footer-logo-dark" : "footer-logo"}>
                        Krypto<span>nig</span>
                    </div>
                    <p>Our NFT marketplace fill your experience with originality, creativity and value.</p>

                </div>
                <div className="others">
                    <ul className='other-ul'>
                        <li className='link-header'>
                            About
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Resource
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Terms and Conditions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='other-ul'>

                        <li className='link-header'>
                            Company
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Our Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Partner with Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Privacy & Policy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='#' className='other-link'>
                                Features
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='other-ul'>
                        <li className='link-header'>
                            Contact
                        </li>
                        <li >
                            <NavLink className='other-link'>
                            kryptonig@gmail.com
                            </NavLink>
                        </li>
                        <div className="social-icons">
                            <a href="https://twitter.com/KryptonigLLC?s=09"> 
                            <FaTwitter/>
                            </a>
                        
                            <a href="https://www.linkedin.com/company/kryptonig-llc/">
                            <FaLinkedin/>
                            </a>
                        </div>
                    </ul>
                </div>
                
            </div>
            <div className={darkMode ? 'dark' : 'lighter'}>
                <div className='horizontal-line'></div>
                <p className='created1'>Created by <strong style={{color: '#FFFFFF'}}>Kryptonig</strong> | All Right Reserved 2023</p>
            

            </div>
            
        </div>
    )
}

export default Footer 