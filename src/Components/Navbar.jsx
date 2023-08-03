import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import {FaBars, FaMoon, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({darkMode, setDarkMode})=>{
    const [toggle, setToggle] = useState(false)
    const handleClick = ()=>{setToggle(!toggle)}


    return(
            <nav className='nav-container' > 
            
                  <NavLink exact to='/' className='nav-logo'>
                      <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Blog%20Pictures%2FKRYPTONIG-ICON%201.png?alt=media&token=d2080398-1405-4320-91ea-a91971e920bb" alt="" />
                      <p className={darkMode ? 'krypto-dark' : 'krypto-light'} >Krypto<span style={{color: '#F1765F'}}>nig</span></p>
                  </NavLink>

   
                  <ul className={(toggle?'uls':'mobile-none')}
                    onClick={()=>setToggle(false)}
                   >  
                      <li>
                           
                          <NavLink exact to='/' className={darkMode ? 'links-dark' : 'links'}>
                              <p>Home</p>
                          </NavLink>
                      </li>
                      <li>
                          <NavLink exact to='/Nfts' className={darkMode ? 'links-dark' : 'links'}>
                              <p>Our NFTs</p>
                          </NavLink>
                      </li> 
                      <li>
                          <NavLink exact to='/Blog' className={darkMode ? 'links-dark' : 'links'}>
                              <p>Blog</p>
                          </NavLink>
                      </li>
                      <li>
                          <NavLink exact to='/showroom' className={darkMode ? 'links-dark' : 'links'}>
                              <p>Showroom</p>
                          </NavLink>
                      </li>
                      <li>
                          <NavLink exact to='/About' className={darkMode ? 'links-dark' : 'links'}>
                              <p>About Us</p>
                          </NavLink>
                      </li>
                      <li>
                          <NavLink exact to='#' className={darkMode ? 'links-dark' : 'links'}>
                              <p>FAQs</p>
                          </NavLink>
                      </li>
                      
                  </ul>
                  <FaMoon onClick={()=>{setDarkMode(!darkMode)}} className= {`icon-size ${darkMode ? 'lighten' : 'icon-iconic'}`} />
  
              <div className="joinwish">
                  <HashLink to='#more' className='Wish'>
                      <p>Explore Now</p> 
                  </HashLink>
              </div>
              <FaMoon onClick={()=>{setDarkMode(!darkMode)}} className={`icon-size ${darkMode ? 'lighten1' : 'iconic-icon'}`}/>
              <div className="menu-btn">
                  
                  <button onClick={handleClick}>{toggle ?  <FaTimes className='icon00' /> : <FaBars className='icon00' /> }</button>
              </div>
            </nav>

  
    )
}
export default Navbar