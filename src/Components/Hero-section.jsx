import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'


const Hero = ()=>{

    return(
        <div>
            <div className="Hero-section">
            <div className="unlocking">
                <h3>Unlocking The Creator Economy</h3>
            </div>
            <div class="para">
               Kryptonig brings next generation digital and marketing solution for web3 creators. Creators can access greater funding via our DAO liquidity pool, promote their projects in our showroom and learn from our community forum via our contribute-to-earn model. <br /> Discover our products today. 
            </div>
            <div className="cont">
            <Link to="/wishlist">
               <button className='join-btn'>Join Our Wait-List</button>
            </Link>
            <Link to="/contact">
               <button className='join-btn  non-btn'>Contact Us</button>
            </Link>
            </div>
            <div class="group1">
                <img src="images/Group 1.png" alt=""  />
            </div>
            </div>


            <div className="offer">
                <h3>Kryptonig Offer</h3>
                <div class="at">
                    At Kryptonig, we bring solutions that brings an end to the creator's dilemma. Discover our products
                </div>
                <div className="boxes">
                    <Link to='/' className="box1">
                        <div >
                        <div class="box-img">
                           <img src="images/Offer 1.svg" alt=""/>
                        </div>
                        <p class="show">Showroom</p>
                        <p class="desc">Showcase your projects to a large and secure community of investors and contributors</p>
                        </div>
                    </Link>

                    <Link to='/' className="box1">
                        <div >
                        <div class="box-img">
                           <img src="images/Offer 2.svg" alt=""/>
                        </div>
                        <p class="show">Blog</p>
                        <p class="desc">Stay connected and Discover what's next in the industry.</p>
                        </div>
                    </Link>

                    <Link to='/' className="box1">
                        <div >
                        <div class="box-img">
                           <img src="images/offer 3.svg" alt=""/>
                        </div>
                        <p class="show">Forum</p>
                        <p class="desc">Create a forum and build your own community or contribute to others.</p>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Hero