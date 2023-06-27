import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Navbar = ()=>{
    const [toggle, setToggle] = useState(false)
    const handleClick = ()=>{setToggle(!toggle)
    }
    return(
        <nav className="nav-container">
            
                <NavLink exact to='/' className='nav-logo'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2Flogo.png?alt=media&token=c69cd70e-00ea-4189-9fe8-4fe4ef948755&_gl=1*mky9ul*_ga*MTg4MjM4NjY4OS4xNjYzMDY3NzUw*_ga_CW55HF8NVT*MTY4NjE1OTg4OS4yNS4xLjE2ODYxNjM1NTEuMC4wLjA." alt=""className='logo' />
                </NavLink>

                <ul className={toggle?'uls':'mobile-none'}
                  onClick={()=>setToggle(false)}
                 >
                    <li>
                        <NavLink exact to='/' className='links'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/About' className='links'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Service' className='links'>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Nfts' className='links'>
                            NFTs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Invest' className='links'>
                            Forum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Blog' className='links'>
                            Blog
                        </NavLink>
                    </li>
                </ul>

            <div className="joinwish">
                <HashLink to='#more' className='Wish'>
                    Join Our Wait-List
                </HashLink>
            </div>
            
            <div className="menu-btn">
                
                <button onClick={handleClick}>{toggle ?  <FaTimes className='icon00' /> : <FaBars className='icon00' /> }</button>
            </div>
        </nav>
    )
}
export default Navbar